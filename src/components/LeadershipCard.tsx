import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LeadershipCardProps {
  name: string;
  title: string;
  imageUrl: string;
}

const LeadershipCard = ({ name, title, imageUrl }: LeadershipCardProps) => {
  const fallback = name.split(' ').map(n => n[0]).join('');
  return (
    <Card className="text-center">
      <CardHeader>
        <Avatar className="w-24 h-24 mx-auto">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-primary">{title}</p>
      </CardContent>
    </Card>
  );
};

export default LeadershipCard;