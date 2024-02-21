import { Livre } from "./livre";

export interface Bibliotheque {
    id: number;
    nom: string;
    livres: Livre[];
}