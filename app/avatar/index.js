import { Avatar, AvatarFallback, AvatarImage } from '~/component/ui/avatar';
import { Text } from '~/component/ui/text';

const GITHUB_AVATAR_URI = 'https://github.com/mrzachnugent.png';

function Example() {
  return (
     <Avatar alt="Zach Nugent's Avatar">
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text>ZN</Text>
        </AvatarFallback>
      </Avatar>
  );
}
export default Example