export interface Produce {
    id: number,
    name: string;
    image: string;
}

export interface FormFieldProps {
    label: string;
    placeholder: string;
    required: boolean;
    styling: string;
}

export interface DivLinkProps {
    text: string;
    route: string;
    styling: string;
}

export interface ProduceCardProps {
    text: string;
    imagePath: string;
}

export interface ButtonProps {
    text: string;
    styling: string;
}

export interface ProduceDetailCardProps {
    text: string;
    imagePath: string;
}


export interface ProduceListProps {
    produce: Produce[];
    onUpdateProduct?: (updatedProduct: Produce) => void;
    onDeleteProduct?: (id: number) => void;
}