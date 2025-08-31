
// // import { Suspense } from "react";
// import { getUserAccounts } from "@/actions/dashboard";
// import { getDashboardData } from "@/actions/dashboard";
// import { getCurrentBudget } from "@/actions/budget";
// import { AccountCard } from "./_components/account-card";
// import { CreateAccountDrawer } from "@/components/ui/create-account-drawer";
// import { BudgetProgress } from "./_components/budget-progress";
// import { Card, CardContent } from "@/components/ui/card";
// import { Plus } from "lucide-react";
// import { DashboardOverview } from "./_components/transaction-overview";

// export default async function DashboardPage() {
//   const [accounts, transactions] = await Promise.all([
//     getUserAccounts(),
//     getDashboardData(),
//   ]);

//   const defaultAccount = accounts?.find((account) => account.isDefault);

//   // Get budget for default account
//   let budgetData = null;
//   if (defaultAccount) {
//     budgetData = await getCurrentBudget(defaultAccount.id);
//   }

//   return (
//     <div className="space-y-8">
//       {/* Budget Progress */}
//       <BudgetProgress
//         initialBudget={budgetData?.budget}
//         currentExpenses={budgetData?.currentExpenses || 0}
//       />

//       {/* Dashboard Overview */}
//       <DashboardOverview
//         accounts={accounts}
//         transactions={transactions || []}
//       />

//       {/* Accounts Grid */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         <CreateAccountDrawer>
//           <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
//             <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
//               <Plus className="h-10 w-10 mb-2" />
//               <p className="text-sm font-medium">Add New Account</p>
//             </CardContent>
//           </Card>
//         </CreateAccountDrawer>
//         {accounts.length > 0 &&
//           accounts?.map((account) => (
//             <AccountCard key={account.id} account={account} />
//           ))}
//       </div>
//     </div>
//   );
// }






import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/ui/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black px-4 md:px-5 py-10 space-y-14">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Dashboard
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            Here’s a quick snapshot of your finances today.
          </p>
        </div>
      </header>

      {/* Budget Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Budget Progress</h2>
        <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/60 backdrop-blur-xl shadow-2xl p-8 hover:shadow-purple-700/40 transition-all duration-500">
          {/* Decorative glows */}
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-purple-800/40 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-indigo-800/40 rounded-full blur-3xl opacity-60" />
          
          <BudgetProgress
            initialBudget={budgetData?.budget}
            currentExpenses={budgetData?.currentExpenses || 0}
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-[1px] shadow-2xl">
          <div className="rounded-3xl bg-gray-950/80 backdrop-blur-xl p-6">
            <DashboardOverview
              accounts={accounts}
              transactions={transactions || []}
            />
          </div>
        </div>
      </section>

      {/* Accounts Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Accounts</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Add new account card */}
          <CreateAccountDrawer>
            <Card className="group relative border-2 border-dashed border-gray-700 rounded-2xl cursor-pointer hover:scale-[1.03] hover:shadow-purple-500/40 transition-all duration-300 bg-gray-900/50 backdrop-blur-md">
              <CardContent className="flex flex-col items-center justify-center h-44 text-black">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Plus className="h-6 w-6" />
                </div>
                <p className="mt-4 text-base font-semibold group-hover:text-indigo-400 transition-colors">
                  Add New Account
                </p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>

          {/* Account Cards */}
          {accounts.length > 0 &&
            accounts?.map((account) => (
              <div
                key={account.id}
                className="hover:scale-[1.03] transition-transform duration-300"
              >
                <AccountCard account={account} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
