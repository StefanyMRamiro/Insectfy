
import { useNavigate } from 'react-router';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-full mt-16">
            <div className="grid place-items-center grid-cols-2 md:grid-cols-4 gap-4 px-2">
                <div className="flex justify-center items-center shadow-2xl p-3 bg-amber-900 h-32 w-44 md:w-60 rounded-lg cursor-pointer" onClick={() => navigate("recognition")}>
                    <span className="text-white">Identificação</span>
                </div>
                <div className="flex justify-center items-center shadow-md p-3 bg-amber-900 h-32 w-44 md:w-60 rounded-lg cursor-pointer" onClick={() => navigate("Manejo")}>
                    <span className="text-white">Manejo</span>
                </div>
                <div className="flex justify-center items-center shadow-md p-3 bg-amber-900 h-32 w-44 md:w-60 rounded-lg cursor-pointer" onClick={() => navigate("Monitoramento")}>
                    <span className="text-white">Monitoramento</span>
                </div>
                <div className="flex justify-center items-center shadow-md p-3 bg-amber-900 h-32 w-44 md:w-60 rounded-lg cursor-pointer" onClick={() => navigate("Predadores")}>
                    <span className="text-white">Predadores</span>
                </div>
                <div className="flex justify-center items-center shadow-md p-3 bg-amber-900 h-32 w-44 md:w-60 rounded-lg cursor-pointer" onClick={() => navigate("DiarioC")}>
                    <span className="text-white">Diário de campo</span>
                </div>
                <div className="flex justify-center items-center shadow-md p-3 bg-amber-900 h-32 w-44 md:w-60 rounded-lg cursor-pointer" onClick={() => navigate("Manejo")}>
                    <span className="text-white">Mapas</span>
                </div>
                <div className="flex justify-center col-span-2 items-center shadow-md p-3 md:w-60 md:col-span-1 bg-amber-900 h-32 w-full rounded-lg cursor-pointer" onClick={() => navigate("Especialistas")}>
                    <span className="text-white">Fale com especialistas</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
