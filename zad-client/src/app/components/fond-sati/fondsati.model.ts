export interface IFondSati {
     _id: string;
     Mesec: Number;
     Godina: Number;
     Sati: Number;
     MinOsnov: Number;
     MaxOsnov: Number;
     Opis?: string;
     NameUser?: string;
     created_at?: Date;
     updatedAt?: Date;
  }

 export class FondSati implements IFondSati {
     _id: string;
      Mesec: Number;
      Godina: Number;
      Sati: Number;
      MinOsnov: Number;
      MaxOsnov: Number;
      Opis?: string;
      NameUser?: string;
      created_at?: Date;
      updatedAt?: Date;
 }
