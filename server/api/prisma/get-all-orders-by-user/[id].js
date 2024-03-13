import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        let orders = await prisma.orders.findMany({
            where: { userId: event.context.params.userId },
            orderBy: { id: "desc" },
            include: { 
                orderItem: {
                    include: {
                        product: true
                    }
                }
                
            }
        });
        return orders;
    } catch (error) {
        console.error(error);
        return createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            data: 'An error occurred while fetching orders.'
        });
    }
});
