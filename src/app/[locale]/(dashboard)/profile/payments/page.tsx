import PaymentsChart from "@/components/Profile/Payments/PaymentsChart";
import { getAllPayments } from "@/scripts/helpers/getAllPayments";
import { getSession } from "@auth0/nextjs-auth0";

export default async function page() {
  const orders = await getAllPayments();
  const session = await getSession();

  if (!session || !orders) {
    return null;
  }
  const user = session?.user;
  const userId = user?.sub;
  const filteredOrders: Payment[] = orders?.filter((order: Payment) => order.metadata.id === userId) ?? [];

  return (
    <main className="flex min-h-[60rem] w-full justify-center py-[4rem]">
      <PaymentsChart payments={filteredOrders} />
    </main>
  );
}
