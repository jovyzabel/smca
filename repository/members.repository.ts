import { Adherent } from "@/generated/prisma/client/client";
import CrudRepository from "./crud.repository";

export default interface MembersRepository extends CrudRepository<Adherent, string> {
    
}