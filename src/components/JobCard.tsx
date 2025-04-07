/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { Building, MapPin } from 'lucide-react';

import type { Job } from '@pkg/api/src/cms/getJobs';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { MarkdownView } from './MarkdownView';

type Props = {
  jobItem: Job;
  isSelected?: boolean;
  isExpanded?: boolean;
  isBoxStyleDisabled?: boolean;
  isMobileView?: boolean;
};

export const WorkMode: Record<string, { label: string }> = {
  IN_PERSON: { label: 'In Person' },
  FULLY_REMOTE: { label: 'Fully Remote' },
  HYBRID: { label: 'Hybrid' },
};

export const CommitmentLevel: Record<string, { label: string }> = {
  FULL_TIME: { label: 'Full-time' },
  PART_TIME: { label: 'Part-time' },
  INTERNSHIP: { label: 'Internship' },
  CONTRACT: { label: 'Contract' },
};

export default function JobCard(props: Props) {
  const { jobItem, isSelected, isExpanded, isBoxStyleDisabled, isMobileView } =
    props;

  const borderColor = isMobileView
    ? 'border-gray-200'
    : isSelected
      ? 'border-blue-500'
      : 'border-gray-200';
  const backgroundColor = isMobileView
    ? 'bg-white'
    : isSelected
      ? 'bg-blue-500 bg-opacity-5'
      : 'bg-white';
  const boxStyles = isBoxStyleDisabled ? 'border-none shadow-none' : '';

  const hasTags =
    jobItem.attributes.salaryRange ||
    jobItem.attributes.experienceLevel ||
    jobItem.attributes.commitmentLevel ||
    jobItem.attributes.workMode;
  const showCardContent = (hasTags && !isExpanded) || isExpanded;

  const companyLogo = jobItem.attributes.logo.data.attributes.url;

  return (
    <Card className={`${borderColor} ${backgroundColor} ${boxStyles}`}>
      <div
        className={`flex items-center overflow-hidden ${
          isBoxStyleDisabled ? 'p-0' : 'p-5'
        }`}
      >
        {companyLogo && (
          <div className="block">
            <div className="h-[60px] w-[60px]">
              <div className="relative overflow-hidden rounded-md border border-gray-200">
                <img
                  alt={jobItem.attributes.company}
                  src={companyLogo}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        )}

        <div className="pl-4">
          <CardTitle className="m-0 text-lg md:text-xl">
            {jobItem.attributes.title}
          </CardTitle>

          <div className="flex flex-wrap pt-1 text-gray-900">
            <div className="flex items-center">
              <Building className="mr-2 h-5 w-5" />
              <span className="mr-4">{jobItem.attributes.company}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span className="">{jobItem.attributes.location}</span>
            </div>
          </div>
        </div>
      </div>
      {showCardContent && (
        <CardContent className={isBoxStyleDisabled ? 'p-0' : ''}>
          {!isExpanded && <Separator className="mb-4" />}
          {jobItem.attributes.workMode && (
            <Badge
              className="my-1 mr-2 whitespace-pre rounded-sm px-2 py-1 text-sm font-medium leading-tight text-gray-900"
              style={{ backgroundColor: '#f2f5f9' }}
              variant="secondary"
            >
              {WorkMode[jobItem.attributes.workMode]?.label ?? ''}
            </Badge>
          )}
          {jobItem.attributes.salaryRange && (
            <Badge
              className="my-1 mr-2 whitespace-pre rounded-sm px-2 py-1 text-sm font-medium leading-tight text-gray-900"
              style={{ backgroundColor: '#f2f5f9' }}
              variant="secondary"
            >
              {jobItem.attributes.salaryRange}
            </Badge>
          )}
          {jobItem.attributes.commitmentLevel && (
            <Badge
              className="my-1 mr-2 whitespace-pre rounded-sm px-2 py-1 text-sm font-medium leading-tight text-gray-900"
              style={{ backgroundColor: '#f2f5f9' }}
              variant="secondary"
            >
              {CommitmentLevel[jobItem.attributes.commitmentLevel]?.label ?? ''}
            </Badge>
          )}
          {jobItem.attributes.experienceLevel && (
            <Badge
              className="my-1 mr-2 whitespace-pre rounded-sm px-2 py-1 text-sm font-medium leading-tight text-gray-900"
              style={{ backgroundColor: '#f2f5f9' }}
              variant="secondary"
            >
              {jobItem.attributes.experienceLevel}
            </Badge>
          )}

          {isExpanded && (
            <div className="prose pt-3">
              <MarkdownView markdown={jobItem.attributes.about ?? ''} />
            </div>
          )}
        </CardContent>
      )}

      {isExpanded && (
        <CardFooter
          className={`flex justify-end ${
            isBoxStyleDisabled ? 'pb-2 pt-8' : ''
          }`}
        >
          <a href={jobItem.attributes.link} target="_blank">
            <Button>See Full Job Description</Button>
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
