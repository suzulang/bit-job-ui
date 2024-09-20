import { Button } from "@/components/ui/button";

export default function FilterButtons({ category, options, selectedOption, onSelect }) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="font-medium text-sm text-gray-700">{getCategoryName(category)}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            variant={selectedOption === option ? "default" : "outline"}
            size="sm"
            onClick={() => onSelect(category, option)}
            className={selectedOption === option ? "bg-primary text-primary-foreground" : "text-gray-700"}
          >
            {option}
          </Button>
        ))}
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