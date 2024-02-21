import { Livre } from "./livre";

export interface Bibliothèque {
    id: number;
    nom: string;
    livres: Livre[];
}