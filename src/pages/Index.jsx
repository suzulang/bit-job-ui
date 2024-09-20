import { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import JobCard from '../components/JobCard';
import FilterButtons from '../components/FilterButtons';

// Mock data for job postings
const mockJobs = [
  {
    id: 1,
    company: '海康科技',
    logo: '/placeholder.svg?height=40&width=40',
    position: '软件工程师',
    location: '深圳',
    applicationPeriod: '2024/09/04-2024/12/01',
    applicationStatus: '已投递',
    jobType: '秋招正式岗',
    companyRating: 'C',
    deadline: '2024-12-01',
  },
  {
    id: 2,
    company: '易源科技',
    logo: '/placeholder.svg?height=40&width=40',
    position: '产品经理',
    location: '北京',
    applicationPeriod: '2024/09/13-2024/11/30',
    applicationStatus: '未投递',
    jobType: '秋招正式岗',
    companyRating: 'B',
    deadline: '2024-11-30',
  },
  {
    id: 3,
    company: '腾讯',
    logo: '/placeholder.svg?height=40&width=40',
    position: '后端开发工程师',
    location: '深圳',
    applicationPeriod: '2024/08/01-2024/10/31',
    applicationStatus: '已投递',
    jobType: '秋招提前批',
    companyRating: 'S',
    deadline: '2024-10-31',
  },
  {
    id: 4,
    company: '阿里巴巴',
    logo: '/placeholder.svg?height=40&width=40',
    position: '算法工程师',
    location: '杭州',
    applicationPeriod: '2024/09/01-2024/11/15',
    applicationStatus: '未投递',
    jobType: '秋招正式岗',
    companyRating: 'S',
    deadline: '2024-11-15',
  },
  {
    id: 5,
    company: '字节跳动',
    logo: '/placeholder.svg?height=40&width=40',
    position: '前端开发工程师',
    location: '北京',
    applicationPeriod: '2024/07/15-2024/09/30',
    applicationStatus: '已投递',
    jobType: '实习岗',
    companyRating: 'A',
    deadline: '2024-09-30',
  },
];

// Filter options
const filterOptions = {
  applicationStatus: ['全部', '已投递', '未投递'],
  jobType: ['全部', '秋招提前批', '秋招正式岗', '春招正式岗', '实习岗'],
  companyRating: ['全部', 'S', 'A', 'B', 'C'],
  deadline: ['全部', '1天后截止', '3天后截止', '1周后截止', '招满即止'],
};

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    applicationStatus: '全部',
    jobType: '全部',
    companyRating: '全部',
    deadline: '全部',
  });
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  useEffect(() => {
    const filteredResults = mockJobs.filter(job => {
      return (
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.applicationStatus === '全部' || job.applicationStatus === filters.applicationStatus) &&
        (filters.jobType === '全部' || job.jobType === filters.jobType) &&
        (filters.companyRating === '全部' || job.companyRating === filters.companyRating) &&
        (filters.deadline === '全部' || checkDeadline(job.deadline, filters.deadline))
      );
    });
    setFilteredJobs(filteredResults);
  }, [filters, searchTerm]);

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  const checkDeadline = (jobDeadline, filterDeadline) => {
    const today = new Date();
    const deadline = new Date(jobDeadline);
    const diffDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));

    switch (filterDeadline) {
      case '1天后截止':
        return diffDays <= 1;
      case '3天后截止':
        return diffDays <= 3;
      case '1周后截止':
        return diffDays <= 7;
      case '招满即止':
        return true; // Assuming all jobs are open until filled
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary text-primary-foreground p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold">比特就业课</span>
            <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary">找校招</Button>
            <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary">论坛</Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hover:bg-primary-foreground hover:text-primary">创作中心</Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary">
                    <Bell className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>通知</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground hover:text-primary">
                    <User className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>个人中心</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </nav>

      <div className="bg-secondary text-secondary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">比特高校</h1>
          <p className="text-2xl">招聘公司汇总</p>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="请输入公司名称"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-2.5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {Object.entries(filterOptions).map(([category, options]) => (
            <FilterButtons
              key={category}
              category={category}
              options={options}
              selectedOption={filters[category]}
              onSelect={handleFilterChange}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-12 flex justify-center space-x-2">
          <Button variant="outline">&lt;</Button>
          <Button variant="default">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">&gt;</Button>
        </div>
      </div>
    </div>
  );
}

function getCategoryName(category) {
  switch (category) {
    case 'applicationStatus':
      return '投递状态';
    case 'jobType':
      return '工作类型';
    case 'companyRating':
      return '公司分级';
    case 'deadline':
      return '截止时间';
    default:
      return category;
  }
}
