import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {
    //id: string //Mongo me da ese id.

    @Prop({ unique: true, index: true }) //El name y el no deben ser unicos.
    name: string;
    @Prop({ unique: true, index: true })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
