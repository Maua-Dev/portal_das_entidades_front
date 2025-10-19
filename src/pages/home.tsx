// import { useParams } from "react-router-dom";
import homeBackGround from "../assets/home-bg.jpg"
import ProfileButton from "../components/profile";
import ArrowButton from "../components/arrow"
import { Link } from "react-router-dom";
import AddButton from "../components/add-button";
import ImportButton from "../components/import-button";
import ExportButton from "../components/export-button";

const Alunos = [
    {
        "nome": "Ademar Gusmão",
        "RA": "25.08833-3",
        "curso": "ENG_COMP",
        "periodo": 7,
        "status": "PASSOU",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Ademir Apresentação",
        "RA": "43.91671-5",
        "curso": "SISTEMAS_DE_INFORMACAO",
        "periodo": 8,
        "status": "NAO_PASSOU",
        "entidade": "Guardian"
    },
    {
        "nome": "Admilson Castanho",
        "RA": "33.72977-9",
        "curso": "DESIGN",
        "periodo": 6,
        "status": "PASSOU",
        "entidade": "E-sports"
    },
    {
        "nome": "Adriana Varejão",
        "RA": "19.98702-8",
        "curso": "CIENCIA_DA_COMPUTACAO",
        "periodo": 2,
        "status": "PASSOU",
        "entidade": "Metaverso"
    },
    {
        "nome": "Adriano Castelo",
        "RA": "33.87768-4",
        "curso": "CIENCIA_DE_DADOS_E_INTELIGENCIA_ARTIFICIAL",
        "periodo": 9,
        "status": "PASSOU",
        "entidade": "Nawat Games"
    },
    {
        "nome": "Afonso Padrão",
        "RA": "41.05054-7",
        "curso": "ADM",
        "periodo": 10,
        "status": "NAO_PASSOU",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Afrânio Fontoura",
        "RA": "20.14798-1",
        "curso": "ENG_COMP",
        "periodo": 8,
        "status": "CONGELADO",
        "entidade": "Guardian"
    },
    {
        "nome": "Agenor Parente",
        "RA": "29.98971-5",
        "curso": "SISTEMAS_DE_INFORMACAO",
        "periodo": 7,
        "status": "PASSOU",
        "entidade": "E-sports"
    },
    {
        "nome": "Agnaldo Frota",
        "RA": "23.63391-9",
        "curso": "DESIGN",
        "periodo": 5,
        "status": "NAO_PASSOU",
        "entidade": "Metaverso"
    },
    {
        "nome": "Agostinho Rabelo",
        "RA": "38.74794-6",
        "curso": "CIENCIA_DA_COMPUTACAO",
        "periodo": 3,
        "status": "PASSOU",
        "entidade": "Nawat Games"
    },
    {
        "nome": "Aguinaldo Salgado",
        "RA": "35.21147-3",
        "curso": "CIENCIA_DE_DADOS_E_INTELIGENCIA_ARTIFICIAL",
        "periodo": 1,
        "status": "PASSOU",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Aída Guedes",
        "RA": "28.53023-7",
        "curso": "ADM",
        "periodo": 10,
        "status": "NAO_PASSOU",
        "entidade": "Guardian"
    },
    {
        "nome": "Aílton Queiroz",
        "RA": "43.76632-4",
        "curso": "ENG_COMP",
        "periodo": 9,
        "status": "CONGELADO",
        "entidade": "E-sports"
    },
    {
        "nome": "Alaíde Guterres",
        "RA": "31.97931-1",
        "curso": "SISTEMAS_DE_INFORMACAO",
        "periodo": 8,
        "status": "PASSOU",
        "entidade": "Metaverso"
    },
    {
        "nome": "Alba Quintal",
        "RA": "41.68367-1",
        "curso": "DESIGN",
        "periodo": 6,
        "status": "NAO_PASSOU",
        "entidade": "Nawat Games"
    },
    {
        "nome": "Alberta Ramires",
        "RA": "29.14168-5",
        "curso": "CIENCIA_DA_COMPUTACAO",
        "periodo": 4,
        "status": "PASSOU",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Albertina Pires",
        "RA": "38.90022-2",
        "curso": "CIENCIA_DE_DADOS_E_INTELIGENCIA_ARTIFICIAL",
        "periodo": 2,
        "status": "PASSOU",
        "entidade": "Guardian"
    },
    {
        "nome": "Alberto Quintão",
        "RA": "21.60333-6",
        "curso": "ADM",
        "periodo": 1,
        "status": "NAO_PASSOU",
        "entidade": "E-sports"
    },
    {
        "nome": "Albino Ramalho",
        "RA": "29.58434-3",
        "curso": "ENG_COMP",
        "periodo": 9,
        "status": "CONGELADO",
        "entidade": "Metaverso"
    },
    {
        "nome": "Alceste Pederneiras",
        "RA": "34.50974-X",
        "curso": "SISTEMAS_DE_INFORMACAO",
        "periodo": 7,
        "status": "PASSOU",
        "entidade": "Nawat Games"
    },
    {
        "nome": "Alceu Valença",
        "RA": "25.16331-8",
        "curso": "DESIGN",
        "periodo": 5,
        "status": "NAO_PASSOU",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Alcides Rufino",
        "RA": "42.79513-5",
        "curso": "CIENCIA_DA_COMPUTACAO",
        "periodo": 3,
        "status": "PASSOU",
        "entidade": "Guardian"
    },
    {
        "nome": "Alcione Varejão",
        "RA": "24.93756-1",
        "curso": "CIENCIA_DE_DADOS_E_INTELIGENCIA_ARTIFICIAL",
        "periodo": 2,
        "status": "PASSOU",
        "entidade": "E-sports"
    },
    {
        "nome": "Alda Vilar",
        "RA": "35.37181-4",
        "curso": "ADM",
        "periodo": 10,
        "status": "NAO_PASSOU",
        "entidade": "Metaverso"
    },
    {
        "nome": "Aldemir Varejão",
        "RA": "42.06203-9",
        "curso": "ENG_COMP",
        "periodo": 8,
        "status": "CONGELADO",
        "entidade": "Nawat Games"
    },
    {
        "nome": "Aldo Meireles",
        "RA": "21.03733-6",
        "curso": "SISTEMAS_DE_INFORMACAO",
        "periodo": 7,
        "status": "PASSOU",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Alessandra Castelo",
        "RA": "28.59991-X",
        "curso": "DESIGN",
        "periodo": 6,
        "status": "NAO_PASSOU",
        "entidade": "Guardian"
    },
    {
        "nome": "Alessandro Pederneiras",
        "RA": "38.77721-7",
        "curso": "CIENCIA_DA_COMPUTACAO",
        "periodo": 4,
        "status": "PASSOU",
        "entidade": "E-sports"
    },
    {
        "nome": "Alex Salgado",
        "RA": "25.29381-5",
        "curso": "CIENCIA_DE_DADOS_E_INTELIGENCIA_ARTIFICIAL",
        "periodo": 2,
        "status": "PASSOU",
        "entidade": "Metaverso"
    },
    {
        "nome": "Alexandra Queirós",
        "RA": "31.60114-X",
        "curso": "ADM",
        "periodo": 1,
        "status": "NAO_PASSOU",
        "entidade": "Nawat Games"
    },
    {
        "nome": "Alexandre Frota",
        "RA": "41.90381-8",
        "curso": "ENG_COMP",
        "periodo": 9,
        "status": "CONGELADO",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Alfredo Valadares",
        "RA": "28.89292-2",
        "curso": "SISTEMAS_DE_INFORMACAO",
        "periodo": 8,
        "status": "PASSOU",
        "entidade": "Guardian"
    },
    {
        "nome": "Alice Guedes",
        "RA": "38.69741-7",
        "curso": "DESIGN",
        "periodo": 6,
        "status": "NAO_PASSOU",
        "entidade": "E-sports"
    },
    {
        "nome": "Aline Rabelo",
        "RA": "27.53031-9",
        "curso": "CIENCIA_DA_COMPUTACAO",
        "periodo": 5,
        "status": "PASSOU",
        "entidade": "Metaverso"
    },
    {
        "nome": "Alisha Vilar",
        "RA": "33.72242-1",
        "curso": "CIENCIA_DE_DADOS_E_INTELIGENCIA_ARTIFICIAL",
        "periodo": 3,
        "status": "PASSOU",
        "entidade": "Nawat Games"
    },
    {
        "nome": "Alonso Gusmão",
        "RA": "22.25143-X",
        "curso": "ADM",
        "periodo": 1,
        "status": "NAO_PASSOU",
        "entidade": "DevCommunity"
    },
    {
        "nome": "Altamiro Sales",
        "RA": "29.91131-7",
        "curso": "ENG_COMP",
        "periodo": 10,
        "status": "CONGELADO",
        "entidade": "Guardian"
    },
    {
        "nome": "Álvaro Lessa",
        "RA": "31.84712-8",
        "curso": "SISTEMAS_DE_INFORMACAO",
        "periodo": 8,
        "status": "PASSOU",
        "entidade": "E-sports"
    },
    {
        "nome": "Alzira Varejão",
        "RA": "33.25331-4",
        "curso": "DESIGN",
        "periodo": 7,
        "status": "NAO_PASSOU",
        "entidade": "Metaverso"
    },
    {
        "nome": "Amadeu Tabares",
        "RA": "35.31174-9",
        "curso": "CIENCIA_DA_COMPUTACAO",
        "periodo": 5,
        "status": "PASSOU",
        "entidade": "Nawat Games"
    }
]


export default function Home() {
    // const { entityId } = useParams();


    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${homeBackGround})` }}
        >
            <ProfileButton></ProfileButton>
            <Link to='/entidades'>
                <ArrowButton></ArrowButton>
            </Link>

            <div className="absolute top-28 inset-x-6 max-w-5/6 mx-auto border-1 border-amber-700">
                <div className="space-x-4">
                    <AddButton />
                    <ImportButton />
                    <ExportButton></ExportButton>
                </div>
            </div>
        </div>
    );
}