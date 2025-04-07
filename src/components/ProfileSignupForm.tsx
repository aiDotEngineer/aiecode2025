import { zodResolver } from '@hookform/resolvers/zod';
import va from '@vercel/analytics';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  profileBooleanQuestions,
  profileBooleanQuestionsSchema as profileQuestionSchema,
} from '@pkg/support';
import {
  socialBlog,
  socialLinkedIn,
  socialOther,
  socialTwitter,
} from '@pkg/support/validators';

import { Button } from '~/components/Button';
import { Checkbox } from '~/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { api } from '~/support/api';
import { entries } from '~/support/entries';

const formSchema = z.object({
  firstName: z.string().nonempty({ message: 'First name is required' }),
  lastName: z.string().nonempty({ message: 'Last name is required' }),
  company: z.string().nonempty({ message: 'Company name is required' }),
  jobTitle: z.string().nonempty({ message: 'Job title is required' }),
  socialLinkedIn,
  socialTwitter,
  socialBlog,
  socialOther,
  career: z.string(),
  projects: z.string(),
  interests: z.string(),
  events: z.string(),
  booleanQuestions: z.array(profileQuestionSchema),
});

type Props = {
  id: string;
  onInvalidId: () => void;
  onSuccess: () => void;
};

export default function ProfileSignupForm(props: Props) {
  const { id, onInvalidId, onSuccess } = props;

  const {
    data: email,
    isLoading,
    error,
  } = api.profile.getEmail.useQuery(id, {
    onSuccess: (data) => {
      if (data === null) {
        onInvalidId();
      }
    },
  });

  const { mutate: submit, isLoading: isSubmitting } =
    api.profile.signup.useMutation({ onSuccess });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      jobTitle: '',
      socialLinkedIn: '',
      socialTwitter: '',
      socialBlog: '',
      socialOther: '',
      career: '',
      projects: '',
      interests: '',
      events: '',
      booleanQuestions: [],
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    va.track('Application');
    submit({
      emailId: id,
      ...data,
    });
  };

  if (error) {
    return <p>Error: {String(error)}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!email) {
    return <p>Error: Invalid Email ID specified</p>;
  }

  return (
    <Form {...form}>
      <form
        className="mt-4 w-full max-w-lg space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-wrap">
          <div className="mb-4 w-full sm:mb-0 sm:w-1/2 sm:pr-2">
            <FormField
              control={form.control}
              name="firstName"
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <FormField
              control={form.control}
              name="lastName"
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormItem>
          <Input
            placeholder="Email"
            value={email.emailAddress}
            disabled={true}
          />
        </FormItem>
        <FormField
          control={form.control}
          name="company"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobTitle"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Job Title*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full flex-wrap">
          <div className="mb-4 w-full sm:mb-0 sm:w-1/2 sm:pr-2">
            <FormField
              control={form.control}
              name="socialLinkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="LinkedIn URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <FormField
              control={form.control}
              name="socialTwitter"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Twitter URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap">
          <div className="mb-4 w-full sm:mb-0 sm:w-1/2 sm:pr-2">
            <FormField
              control={form.control}
              name="socialBlog"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Blog" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <FormField
              control={form.control}
              name="socialOther"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Other" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="career"
          render={({ field }) => (
            <FormItem>
              <Label className="font-medium">
                {`Provide a brief summary of your professional career and work.`}
              </Label>
              <FormControl>
                <Textarea placeholder="Type your message here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projects"
          render={({ field }) => (
            <FormItem>
              <Label className="font-medium">
                {`What have you been building with AI technologies?`} <br />
                <FormDescription>
                  {`Include links to demos or product pages if applicable.`}
                </FormDescription>
              </Label>
              <FormControl>
                <Textarea placeholder="Type your message here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <Label className="font-medium">
                {`What are you most interested in learning?`}
              </Label>
              <FormControl>
                <Textarea placeholder="Type your message here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="events"
          render={({ field }) => (
            <FormItem>
              <Label className="font-medium">
                {`Who are some people you’d like to meet or hear speak at Summit
                or other events?`}
              </Label>
              <FormControl>
                <Textarea placeholder="Type your message here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="booleanQuestions"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">I am...</FormLabel>
                <FormDescription>Select all that apply.</FormDescription>
              </div>
              {entries(profileBooleanQuestions).map(([id, { label }]) => (
                <FormField
                  key={String(id)}
                  control={form.control}
                  name="booleanQuestions"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value.includes(id)}
                            onCheckedChange={(checked) => {
                              const newItems = new Set(field.value);
                              if (checked) {
                                newItems.add(id);
                              } else {
                                newItems.delete(id);
                              }
                              field.onChange(Array.from(newItems));
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{label}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full place-content-center rounded-md py-2"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? '...' : 'Submit Application'}
        </Button>
      </form>
    </Form>
  );
}
