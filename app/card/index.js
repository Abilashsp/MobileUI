import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '~/component/ui/card';
  import { Text } from '~/component/ui/text';
  
  function Example() {
    return (
        <Card className='w-full max-w-sm'>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Text>Card Content</Text>
          </CardContent>
          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>
    );
  }
  export default Example