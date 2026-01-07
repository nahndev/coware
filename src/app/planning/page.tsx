"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Target, Users, BarChart3, CheckCircle, Clock, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function PlanningIntroPage() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Quản lý mục tiêu",
      description: "Đặt và theo dõi các mục tiêu dự án một cách chi tiết và khoa học",
    },
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: "Lên lịch thông minh",
      description: "Tạo timeline dự án với khả năng tối ưu hóa thời gian và nguồn lực",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Phân công nhiệm vụ",
      description: "Gán công việc cho từng thành viên dựa trên kỹ năng và khả năng",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Báo cáo tiến độ",
      description: "Theo dõi tiến độ dự án với biểu đồ và metrics trực quan",
    },
  ];

  const benefits = [
    "Tăng 40% hiệu quả quản lý dự án",
    "Giảm 60% thời gian họp planning",
    "Cải thiện khả năng dự báo timeline",
    "Tối ưu hóa phân bổ nguồn lực",
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          <Zap className="h-4 w-4 mr-1" />
          Chức năng mới
        </Badge>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Planning - Lập kế hoạch thông minh
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Công cụ lập kế hoạch dự án toàn diện giúp bạn quản lý mọi giai đoạn từ ý tưởng đến thực hiện
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/feature/planning/create">
              Bắt đầu ngay
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/feature/planning/demo">Xem demo</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Tính năng chính</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Lợi ích khi sử dụng</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Thống kê hiệu quả</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">2.5x</div>
                <div className="text-sm text-muted-foreground">Nhanh hơn trong planning</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">Độ chính xác dự báo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
        <CardContent className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-xl mb-8 opacity-90">Tạo kế hoạch dự án đầu tiên của bạn ngay hôm nay</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/feature/planning/templates">Chọn template</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10" asChild>
              <Link href="/feature/planning/guide">Hướng dẫn sử dụng</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
