import * as HoverCard from '@radix-ui/react-hover-card';
import { User } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CustomHoverCard() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary">
          <User className="h-5 w-5" />
        </Button>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-48 p-4 right-12 relative bg-white rounded-md shadow-lg">
        <div className="flex flex-col items-center">
          <User className="h-16 w-16 mb-2" />
          <h3 className="text-lg font-semibold">用户名</h3>
          <p className="text-sm text-gray-500 mb-4">user@example.com</p>
          <Button className="w-full mb-2">个人中心</Button>
          <Button variant="outline" className="w-full text-gray-500">退出登录</Button>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
