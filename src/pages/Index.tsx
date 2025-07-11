import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"student" | "teacher" | "admin">(
    "student",
  );
  const [selectedUser, setSelectedUser] = useState("student");

  const handleLogin = () => {
    setUserRole(selectedUser as "student" | "teacher" | "admin");
    setIsLoggedIn(true);
  };

  const grades = [
    { subject: "Математика", grade: 5, date: "15.12.2024" },
    { subject: "Русский язык", grade: 4, date: "14.12.2024" },
    { subject: "Физика", grade: 5, date: "13.12.2024" },
    { subject: "Химия", grade: 3, date: "12.12.2024" },
  ];

  const schedule = [
    {
      time: "8:30-9:15",
      subject: "Математика",
      room: "204",
      teacher: "Иванова А.П.",
    },
    {
      time: "9:25-10:10",
      subject: "Русский язык",
      room: "315",
      teacher: "Петрова М.В.",
    },
    {
      time: "10:25-11:10",
      subject: "Физика",
      room: "101",
      teacher: "Сидоров И.И.",
    },
    {
      time: "11:25-12:10",
      subject: "Химия",
      room: "205",
      teacher: "Федорова Н.С.",
    },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Icon
                name="GraduationCap"
                size={48}
                className="text-primary mr-3"
              />
              <h1 className="text-4xl font-bold text-gray-900">МЭШ+</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Московская электронная школа нового поколения
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900">
                Образование будущего уже сегодня
              </h2>
              <p className="text-lg text-gray-600">
                Полный функционал для учеников, учителей и администрации.
                Электронный журнал, расписание, домашние задания, аналитика
                успеваемости и многое другое.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "BookOpen", title: "Электронный журнал" },
                  { icon: "Calendar", title: "Расписание уроков" },
                  { icon: "Users", title: "Управление классами" },
                  { icon: "BarChart", title: "Аналитика успеваемости" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <Icon
                      name={feature.icon as any}
                      size={20}
                      className="text-primary"
                    />
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src="/img/18962455-6bfb-4952-9077-ebdea2e6d7bc.jpg"
                alt="Современное образование"
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
            </div>
          </div>

          {/* Login Section */}
          <Card className="max-w-md mx-auto p-8 animate-scale-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">Вход в систему</h3>
              <p className="text-gray-600">
                Выберите свою роль для демонстрации
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "student", label: "Ученик", icon: "User" },
                  { id: "teacher", label: "Учитель", icon: "UserCheck" },
                  { id: "admin", label: "Админ", icon: "Settings" },
                ].map((role) => (
                  <Button
                    key={role.id}
                    variant={selectedUser === role.id ? "default" : "outline"}
                    onClick={() => setSelectedUser(role.id)}
                    className="flex flex-col h-20 space-y-1"
                  >
                    <Icon name={role.icon as any} size={20} />
                    <span className="text-xs">{role.label}</span>
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="login">Логин</Label>
                  <Input
                    id="login"
                    placeholder="Введите логин"
                    defaultValue="demo_user"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                    defaultValue="demo123"
                  />
                </div>
              </div>

              <Button onClick={handleLogin} className="w-full" size="lg">
                <Icon name="LogIn" size={20} className="mr-2" />
                Войти в систему
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-xl font-semibold">МЭШ+</h1>
              <Badge variant="secondary">
                {userRole === "student"
                  ? "Ученик"
                  : userRole === "teacher"
                    ? "Учитель"
                    : "Администратор"}
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="MessageSquare" size={20} />
              </Button>
              <Avatar>
                <AvatarFallback>ДП</AvatarFallback>
              </Avatar>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLoggedIn(false)}
              >
                <Icon name="LogOut" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Добро пожаловать,{" "}
            {userRole === "student"
              ? "Иван!"
              : userRole === "teacher"
                ? "Анна Петровна!"
                : "Администратор!"}
          </h2>
          <p className="text-gray-600">
            {userRole === "student"
              ? "11 класс А • Средний балл: 4.2"
              : userRole === "teacher"
                ? "Учитель математики • 5 классов"
                : "Панель управления школой №1234"}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {userRole === "student" &&
            [
              {
                title: "Средний балл",
                value: "4.2",
                icon: "TrendingUp",
                color: "text-green-600",
              },
              {
                title: "Пропуски",
                value: "2",
                icon: "Calendar",
                color: "text-orange-600",
              },
              {
                title: "Домашние задания",
                value: "3",
                icon: "BookOpen",
                color: "text-blue-600",
              },
              {
                title: "Уведомления",
                value: "5",
                icon: "Bell",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <Card key={index} className="p-6 hover-scale">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className={stat.color}
                  />
                </div>
              </Card>
            ))}

          {userRole === "teacher" &&
            [
              {
                title: "Классы",
                value: "5",
                icon: "Users",
                color: "text-blue-600",
              },
              {
                title: "Учеников",
                value: "142",
                icon: "GraduationCap",
                color: "text-green-600",
              },
              {
                title: "Уроков сегодня",
                value: "6",
                icon: "Clock",
                color: "text-orange-600",
              },
              {
                title: "Проверить работ",
                value: "23",
                icon: "FileText",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <Card key={index} className="p-6 hover-scale">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className={stat.color}
                  />
                </div>
              </Card>
            ))}

          {userRole === "admin" &&
            [
              {
                title: "Учеников",
                value: "1,234",
                icon: "Users",
                color: "text-blue-600",
              },
              {
                title: "Учителей",
                value: "87",
                icon: "UserCheck",
                color: "text-green-600",
              },
              {
                title: "Классов",
                value: "45",
                icon: "Building",
                color: "text-orange-600",
              },
              {
                title: "Средний балл",
                value: "4.1",
                icon: "BarChart",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <Card key={index} className="p-6 hover-scale">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className={stat.color}
                  />
                </div>
              </Card>
            ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="journal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="journal">Журнал</TabsTrigger>
                <TabsTrigger value="schedule">Расписание</TabsTrigger>
                <TabsTrigger value="homework">Задания</TabsTrigger>
              </TabsList>

              <TabsContent value="journal" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Электронный журнал
                  </h3>
                  <div className="space-y-3">
                    {grades.map((grade, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{grade.subject}</p>
                          <p className="text-sm text-gray-600">{grade.date}</p>
                        </div>
                        <Badge
                          variant={grade.grade >= 4 ? "default" : "destructive"}
                          className="text-lg px-3 py-1"
                        >
                          {grade.grade}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Расписание на сегодня
                  </h3>
                  <div className="space-y-3">
                    {schedule.map((lesson, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="text-sm font-mono text-gray-600 w-20">
                          {lesson.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{lesson.subject}</p>
                          <p className="text-sm text-gray-600">
                            {lesson.teacher} • Каб. {lesson.room}
                          </p>
                        </div>
                        <Icon
                          name="MapPin"
                          size={16}
                          className="text-gray-400"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="homework" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Домашние задания
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        subject: "Математика",
                        task: "Решить задачи №15-20",
                        deadline: "До завтра",
                        status: "pending",
                      },
                      {
                        subject: "Физика",
                        task: "Лабораторная работа №3",
                        deadline: "До 20.12",
                        status: "in-progress",
                      },
                      {
                        subject: "Литература",
                        task: "Эссе по произведению",
                        deadline: "До 18.12",
                        status: "completed",
                      },
                    ].map((hw, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 border rounded-lg"
                      >
                        <div
                          className={`w-3 h-3 rounded-full mt-2 ${
                            hw.status === "completed"
                              ? "bg-green-500"
                              : hw.status === "in-progress"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{hw.subject}</p>
                          <p className="text-gray-600">{hw.task}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {hw.deadline}
                          </p>
                        </div>
                        <Badge
                          variant={
                            hw.status === "completed" ? "default" : "outline"
                          }
                        >
                          {hw.status === "completed"
                            ? "Выполнено"
                            : hw.status === "in-progress"
                              ? "В работе"
                              : "Ожидает"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar Widget */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2" />
                Календарь
              </h3>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15</p>
                <p className="text-gray-600">Декабря, Пятница</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-sm p-2 bg-blue-50 rounded flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Контрольная по математике
                </div>
                <div className="text-sm p-2 bg-green-50 rounded flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Родительское собрание
                </div>
              </div>
            </Card>

            {/* Progress Widget */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Успеваемость
              </h3>
              <div className="space-y-4">
                {[
                  { subject: "Математика", progress: 85 },
                  { subject: "Физика", progress: 92 },
                  { subject: "Химия", progress: 78 },
                  { subject: "Литература", progress: 95 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.subject}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Zap" size={20} className="mr-2" />
                Быстрые действия
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {userRole === "student" &&
                  [
                    { icon: "Download", label: "Справки" },
                    { icon: "MessageSquare", label: "Чат" },
                    { icon: "FileText", label: "Отчеты" },
                    { icon: "Settings", label: "Настройки" },
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-3 flex flex-col space-y-1"
                    >
                      <Icon name={action.icon as any} size={20} />
                      <span className="text-xs">{action.label}</span>
                    </Button>
                  ))}

                {userRole === "teacher" &&
                  [
                    { icon: "PlusCircle", label: "Урок" },
                    { icon: "FileEdit", label: "Оценки" },
                    { icon: "Users", label: "Классы" },
                    { icon: "BarChart", label: "Отчеты" },
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-3 flex flex-col space-y-1"
                    >
                      <Icon name={action.icon as any} size={20} />
                      <span className="text-xs">{action.label}</span>
                    </Button>
                  ))}

                {userRole === "admin" &&
                  [
                    { icon: "UserPlus", label: "Пользователи" },
                    { icon: "Settings", label: "Система" },
                    { icon: "BarChart3", label: "Аналитика" },
                    { icon: "Database", label: "Данные" },
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto py-3 flex flex-col space-y-1"
                    >
                      <Icon name={action.icon as any} size={20} />
                      <span className="text-xs">{action.label}</span>
                    </Button>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
