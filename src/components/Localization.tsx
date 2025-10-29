import { LocalizationUs } from "@/types/LocaliationUs";

type ProppsPlace = {
    local: LocalizationUs[];
}

export const Localization = ({ local }: ProppsPlace) => {
    return (
        <div>
            <p className="text-center py-4 text-gray-600">Qual é o seu bairro?</p>
            <select name="" className="w-full text-gray-600 text-center">
                {local.map(item => (
                    <>
                        <option key={item.id} value="">{item.place}</option>
                    </>
                ))}
            </select>
        </div>
    );
}