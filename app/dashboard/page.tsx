import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, DollarSign, TrendingUp, Calendar, Building, Briefcase, PieChart } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
            <p className="text-gray-600">Track growth, funding, and BEAM ecosystem projects</p>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-600">
            Live Data
          </Badge>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$18,400</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Funding Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$125K</div>
              <p className="text-xs text-muted-foreground">of $500K goal (25%)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Workshop Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* BEAM Ecosystem & Sugar Hill Projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                BEAM Ecosystem Projects
              </CardTitle>
              <CardDescription>Active collaborations and funding opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">SBA Loan Application</h4>
                    <p className="text-sm text-gray-600">$250K business expansion</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Education Grant</h4>
                    <p className="text-sm text-gray-600">$50K STEM program funding</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Approved</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">EB-5 Investment</h4>
                    <p className="text-sm text-gray-600">$500K expansion capital</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Planning</Badge>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Submit New Project
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Sugar Hill Development
              </CardTitle>
              <CardDescription>Real estate project roadmap and milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Site Acquisition</span>
                    <span className="text-sm text-gray-600">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Permits & Approvals</span>
                    <span className="text-sm text-gray-600">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Construction Planning</span>
                    <span className="text-sm text-gray-600">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Funding Secured</span>
                    <span className="text-sm text-gray-600">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </div>

              <Button className="w-full">View Full Roadmap</Button>
            </CardContent>
          </Card>
        </div>

        {/* Funding Sources Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Funding Sources & Targets
            </CardTitle>
            <CardDescription>Track progress across different funding channels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">SBA Loans</span>
                  <span className="text-sm text-gray-600">$250K target</span>
                </div>
                <Progress value={60} className="h-3" />
                <p className="text-xs text-gray-600">Application submitted, awaiting approval</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Grants</span>
                  <span className="text-sm text-gray-600">$100K target</span>
                </div>
                <Progress value={50} className="h-3" />
                <p className="text-xs text-gray-600">2 grants approved, 3 pending</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">EB-5 Investment</span>
                  <span className="text-sm text-gray-600">$500K target</span>
                </div>
                <Progress value={15} className="h-3" />
                <p className="text-xs text-gray-600">Initial investor meetings scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
