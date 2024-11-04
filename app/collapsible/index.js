import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '~/component/ui/collapsible';
import { Text } from '~/component/ui/text';

function Example() {
  return (
      <Collapsible>
            <CollapsibleTrigger >
               <Text className="text-black">Toggle</Text>
            </CollapsibleTrigger>
            <CollapsibleContent >
              <Text className="text-black">@radix-ui/react</Text>
            </CollapsibleContent>
      </Collapsible>
  );
}
export default Example