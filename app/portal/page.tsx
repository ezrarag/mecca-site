import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, MessageSquare, Trophy, Clock, Star, Download, Video } from "lucide-react"

export default function ParentPortal() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Parent Portal</h1>
            <p className="text-gray-600">Track Emma's learning journey and progress</p>
          </div>
          <Badge className="bg-green-100 text-green-800">Active Member</Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessions This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">4 sessions per week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projects Completed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Excellent progress</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Projects & Progress */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Current Projects
              </CardTitle>
              <CardDescription>Emma's active learning projects and milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Solar System Model</h4>
                    <Badge className="bg-blue-100 text-blue-800">Science</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Building a 3D model of the solar system with LED lights</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Story Writing</h4>
                    <Badge className="bg-green-100 text-green-800">Creative</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Writing and illustrating an original short story</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Basic Coding</h4>
                    <Badge className="bg-purple-100 text-purple-800">STEM</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Learning Scratch programming with interactive games</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Recent Updates
              </CardTitle>
              <CardDescription>Messages and feedback from Emma's mentors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm">Ms. Sarah (Science Mentor)</h4>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Emma showed excellent understanding of planetary orbits today. She's ready to move on to the LED
                    wiring phase of her solar system project!
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm">Mr. James (Creative Writing)</h4>
                    <span className="text-xs text-gray-500">4 days ago</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Emma's storytelling has improved dramatically. Her character development and plot structure show
                    real creativity and growth.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm">Ms. Lisa (STEM Coordinator)</h4>
                    <span className="text-xs text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Emma completed her first Scratch animation! She's showing great logical thinking and problem-solving
                    skills.
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                View All Messages
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Resources & Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Download className="mr-2 w-4 h-4" />
                Download Progress Report
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Video className="mr-2 w-4 h-4" />
                View Session Recordings
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <BookOpen className="mr-2 w-4 h-4" />
                Access Learning Materials
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Science Fair Presentation</div>
                <div className="text-gray-600">March 15, 2024 at 2:00 PM</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Parent-Teacher Conference</div>
                <div className="text-gray-600">March 20, 2024 at 4:30 PM</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Creative Writing Workshop</div>
                <div className="text-gray-600">March 25, 2024 at 10:00 AM</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Schedule Consultation</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Book Workshop Session
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Message Mentors
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
