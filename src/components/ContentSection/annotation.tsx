import Button from "../Button";

const AnnotationSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="px-8 py-4 text-xl font-bold text-grey-1">Anotações</h2>
        <Button styleType="white" disabled>
          Editar
        </Button>
      </div>
      <div className="flex items-center justify-center bg-grey-6 px-4 py-8 shadow-card">
        <p className="font-medium text-grey-3">
          Você ainda não possui nenhuma anotação
        </p>
      </div>
    </div>
  );
};

export default AnnotationSection;
