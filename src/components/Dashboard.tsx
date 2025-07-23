import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Wallet, 
  PiggyBank,
  CreditCard,
  Plus,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";

interface FinancialSummary {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savings: number;
}

interface Goal {
  id: string;
  title: string;
  current: number;
  target: number;
  category: string;
}

const Dashboard = () => {
  const [showBalances, setShowBalances] = useState(true);
  
  // Sample data - in real app, this would come from your backend
  const financialData: FinancialSummary = {
    totalBalance: 12450.75,
    monthlyIncome: 5800.00,
    monthlyExpenses: 3240.50,
    savings: 2559.25
  };

  const goals: Goal[] = [
    { id: '1', title: 'Emergency Fund', current: 8500, target: 15000, category: 'Safety' },
    { id: '2', title: 'Vacation Trip', current: 2300, target: 5000, category: 'Lifestyle' },
    { id: '3', title: 'New Car', current: 12000, target: 25000, category: 'Transportation' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const toggleBalanceVisibility = () => {
    setShowBalances(!showBalances);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Financial Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleBalanceVisibility}
            className="gap-2"
          >
            {showBalances ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showBalances ? 'Hide' : 'Show'} Balances
          </Button>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {showBalances ? formatCurrency(financialData.totalBalance) : '••••••'}
              </div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +2.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Income
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-finance-income" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {showBalances ? formatCurrency(financialData.monthlyIncome) : '••••••'}
              </div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +5.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Expenses
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-finance-expense" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {showBalances ? formatCurrency(financialData.monthlyExpenses) : '••••••'}
              </div>
              <p className="text-xs text-warning flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +1.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Savings
              </CardTitle>
              <PiggyBank className="h-4 w-4 text-finance-savings" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {showBalances ? formatCurrency(financialData.savings) : '••••••'}
              </div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +8.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex-col gap-2 bg-gradient-primary hover:opacity-90 transition-opacity">
                <Plus className="h-5 w-5" />
                Add Income
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <DollarSign className="h-5 w-5" />
                Add Expense
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Target className="h-5 w-5" />
                Set Goal
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <CreditCard className="h-5 w-5" />
                View Cards
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Goals Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold text-foreground">Financial Goals</CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Goal
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {goals.map((goal) => {
                const progressPercentage = (goal.current / goal.target) * 100;
                return (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-foreground">{goal.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {goal.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">
                          {showBalances ? formatCurrency(goal.current) : '••••••'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          of {showBalances ? formatCurrency(goal.target) : '••••••'}
                        </div>
                      </div>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <div className="text-xs text-muted-foreground text-right">
                      {progressPercentage.toFixed(1)}% complete
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Salary Deposit</p>
                      <p className="text-sm text-muted-foreground">Jan 15, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-success">
                      {showBalances ? '+$5,800.00' : '+••••••'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-finance-expense rounded-full flex items-center justify-center">
                      <TrendingDown className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Grocery Shopping</p>
                      <p className="text-sm text-muted-foreground">Jan 14, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-finance-expense">
                      {showBalances ? '-$156.80' : '-••••••'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-finance-savings rounded-full flex items-center justify-center">
                      <PiggyBank className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Emergency Fund</p>
                      <p className="text-sm text-muted-foreground">Jan 13, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-finance-savings">
                      {showBalances ? '+$500.00' : '+••••••'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;