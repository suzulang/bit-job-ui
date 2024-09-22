import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // 这里应该添加注册逻辑
    // 成功注册后导航到登录页面
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>注册</CardTitle>
          <CardDescription>创建您的新账户</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">用户名</Label>
                <Input id="username" placeholder="请输入您的用户名" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">邮箱</Label>
                <Input id="email" type="email" placeholder="请输入您的邮箱" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">密码</Label>
                <Input id="password" type="password" placeholder="请输入您的密码" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">确认密码</Label>
                <Input id="confirmPassword" type="password" placeholder="请再次输入您的密码" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleRegister}>注册</Button>
        </CardFooter>
        <p className="text-center mt-4">
          已有账户? <Link to="/login" className="text-primary hover:underline">登录</Link>
        </p>
      </Card>
    </div>
  );
}
