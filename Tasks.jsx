import { View, Text, Image, TouchableOpacity, ScrollView, TextInput,} from "react-native";
import { icons } from "../../constants";
import Icon from 'react-native-vector-icons/Feather';



const Tasks = () => {
  return (
    <View className="bg-white h-screen w-screen px-4">
      <View className="flex flex-row justify-between w-full py-2">
        <Image source={icons.logo3d} className="h-10 w-[130px]" />
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={icons.avatar} className="h-10 w-10" />
        </TouchableOpacity>
      </View>
      <View className="py-4">
        <Text className="text-5xl font-bold">My Tasks</Text>
      </View>
      <View className="w-full h-10 rounded-lg flex-row justify-between items-center bg-[#F3F4F6]">
            <TouchableOpacity >
              <Image
                source={icons.search}
                className="m-4 w-5 h-5"
              />
            </TouchableOpacity>
            <TextInput
              className="w-full"
              placeholder="Search"
              placeholderTextColor="#a2a9b9"
            />
    </View>
    </View>
  );
};

export default Tasks;

