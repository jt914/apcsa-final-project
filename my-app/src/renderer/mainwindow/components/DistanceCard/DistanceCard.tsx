import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  distance: string;
}

const ConfigurationCard: React.FC<Props> = ({
  title,
  description,
  distance,
}: Props) => {
  return (
      <div className="w-full rounded-md p-4 border hover:border-neutral-700/60 border-transparent hover:bg-transparent transition-colors duration-150 bg-neutral-700/20 flex flex-col justify-between">
        <h2 className="text-white text-lg font-medium">{title}</h2>
        <p className="text-sm text-neutral-400">{description}</p>
        <h3 className = "text-white text-2xl font-medium">{distance}</h3>
      </div>
  );
};

export default ConfigurationCard;
