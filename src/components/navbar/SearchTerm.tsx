import { useState, useEffect, useRef } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { FindWithoutToken } from "../../services/Service";
import { useNavigate } from "react-router-dom";
import Product from "../../models/Product";

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const fetchResults = async (term: string) => {
    if (term) {
      setLoading(true);
      try {
        await FindWithoutToken(`/product/search/${term}`, (data: Product[]) => {
          setResults(data.slice(0, 10));
        });
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchResults(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setResults([]);
      setSearchTerm(""); // Limpa o termo de pesquisa ao clicar fora
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResultClick = (productId: number) => {
    navigate(`/product/${productId}`);
    clearSearch(); // Limpa os resultados e a mensagem de "nenhum produto encontrado"
  };

  const handleNavigateToProducts = () => {
    navigate("/products");
    clearSearch(); // Limpa os resultados e a mensagem de "nenhum produto encontrado"
  };

  const clearSearch = () => {
    setResults([]); // Recolhe os resultados
    setSearchTerm(""); // Limpa o termo de pesquisa
  };

  return (
    <div ref={searchContainerRef} className="flex items-center relative">
      <input
        id="BarraPesquisa"
        className="rounded-xl pl-3 w-[25vw] me-2 focus:outline-none bg-backgroundCard"
        placeholder="Digite aqui"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-primary hover:bg-hoverPrimary rounded-full text-backgroundCard p-1.5"
        style={{ width: "40px", height: "40px" }}
      >
        <MagnifyingGlass />
      </button>

      {loading && <div>Loading...</div>}

      {results.length > 0 && (
        <div
          className="absolute mt-2 w-[calc(100%-16px)] bg-backgroundCard shadow-md rounded-lg z-10"
          style={{
            top: "100%",
            left: "0",
            maxHeight: "40vh",
            overflowY: "auto",
          }}
        >
          {results.map((result) => (
            <div
              onClick={() => handleResultClick(result.id)}
              key={result.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {result.name}
            </div>
          ))}
          <button
            className="w-full text-primary py-2 hover:bg-backgroundHeader cursor-pointer"
            onClick={handleNavigateToProducts}
          >
            Ir para página de produtos
          </button>
        </div>
      )}

      {!loading && searchTerm && results.length === 0 && (
        <div
          className="absolute mt-2 w-[calc(100%-16px)] bg-backgroundCard shadow-md rounded-lg p-2 z-10"
          style={{ top: "100%", left: "0" }}
        >
          Nenhum produto foi encontrado.
        </div>
      )}
    </div>
  );
};

export default SearchTerm;
