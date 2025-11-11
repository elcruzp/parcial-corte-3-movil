import './PointCard.css';

interface ContainerProps {
  name: string;
}

const PointCard: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Registro  <a target="_blank" rel="noopener noreferrer" >de Puntos</a></p>
    </div>
    
  );
};

export default ExploreContainer;
