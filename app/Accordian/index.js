import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/component/ui/accordion";
  import { Text } from "~/component/ui/text";
  import { AntDesign } from "@expo/vector-icons";
  import { View } from "react-native";
  
  function Example() {
    return (
      <Accordion
        type="multiple"
        collapsible
        defaultValue={["item-1"]}
        className="w-full max-w-sm native:max-w-md bg-gray-50 p-4 rounded-lg shadow-lg"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center justify-between p-3 hover:bg-gray-200 rounded-lg transition duration-200">
            <View className="flex items-center gap-2 flex-row justify-between w-full">
              <View>
                <Text className="font-semibold text-gray-800">
                  Is it accessible?
                </Text>
              </View>
              <View>
                <AntDesign name="caretdown" size={24} color="black" />
              </View>
            </View>
          </AccordionTrigger>
          <AccordionContent className="p-3 bg-white rounded-lg shadow-sm">
            <Text className="text-gray-600">
              Yes. It adheres to the WAI-ARIA design pattern.
            </Text>
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex items-center justify-between p-3 hover:bg-gray-200 rounded-lg transition duration-200">
            <View className="flex items-center gap-2 flex-row justify-between w-full">
              <View>
                <Text className="font-semibold text-gray-800">
                  What are universal components?
                </Text>
              </View>
              <View>
                <AntDesign name="caretdown" size={24} color="black" />
              </View>
            </View>
          </AccordionTrigger>
          <AccordionContent className="p-3 bg-white rounded-lg shadow-sm">
            <Text className="text-gray-600">
              In the world of React Native, universal components work on both web
              and native platforms.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  
  export default Example;
  