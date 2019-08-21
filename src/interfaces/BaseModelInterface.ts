import { ModelsHashInterface } from "sequelize";

export interface BaseModelInterface {
    prototype?
    associate?(models: ModelsHashInterface): void
}