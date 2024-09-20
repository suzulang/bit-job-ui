import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, Star } from 'lucide-react';

export default function JobCard({ job }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={job.logo} alt={`${job.company} logo`} />
            <AvatarFallback>{job.company[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{job.company}</CardTitle>
            <p className="text-lg font-semibold text-primary">{job.position}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{job.applicationPeriod}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline">{job.jobType}</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-muted-foreground" />
            <Badge>{job.companyRating}</Badge>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Badge variant={job.applicationStatus === '已投递' ? "default" : "secondary"}>
            {job.applicationStatus}
          </Badge>
          <span className="text-sm text-muted-foreground">截止日期: {job.deadline}</span>
        </div>
      </CardContent>
    </Card>
  );
}