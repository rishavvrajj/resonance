import { baseProcedure, createTRPCRouter } from '../init';
 
export const appRouter = createTRPCRouter({
  health : baseProcedure.query(async () => {
    return { status : "Oky"}
  })
});
 
// export type definition of API
export type AppRouter = typeof appRouter;