// interfaces.ts
export interface FormFieldProps {
    label: string;
    placeholder: string;
    field: string;
    required: boolean;
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
