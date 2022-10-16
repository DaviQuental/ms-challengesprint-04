import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ProductServices } from '../../services'
import { TitleComponent } from "../../common/components/title";
import { AddProductStyles, ButtonStyles, FormStyles, InputStyles, SelectStyles } from "./AddProduct.styles";

export const AddProductPage: React.FC = () => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const [ value, setValue ] = useState("AC");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const nome = String(data.get('nome'));
        const categoria = String(data.get('categoria'));
        const preco = Number(data.get('preco'));
        const quantidade = Number(data.get('quantidade'));

        const product = {
            nome, 
            categoria,
            preco,
            quantidade
        }

        if(product) {
            ProductServices.post(product).then(response => {
                const data = response?.data;
                if(data) {
                    Swal.fire(
                        'Produto cadastrado!',
                        'Veja-o na página de produtos',
                        'success'
                    );
                } else {
                    Swal.fire(
                        'Produto não cadastrado!',
                        'Ocorreu um erro',
                        'error'
                    );
                }
            })
        }
    };

    return (
        <AddProductStyles>
            <TitleComponent>Adicionar Produto</TitleComponent>
            <FormStyles onSubmit={handleSubmit}>
                <InputStyles
                    required
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    autoFocus
                />
                <SelectStyles
                    ref={selectRef}
                    required
                    id="categoria"
                    name="categoria"
                    onChange={(e) => setValue(e.currentTarget.value)}
                    selectedValue={value}
                    value={value}
                >
                    <option value="AC" selected disabled hidden>Categoria</option>
                    <option value="ALIMENTACAO">Alimentação</option>
                    <option value="ELETRODOMESTICO">Eletrodoméstico</option>
                    <option value="ELETRONICO">Eletrônico</option>
                    <option value="VESTUARIO">Vestuário</option>
                    <option value="OUTRO">Outro</option>
                </SelectStyles>
                <InputStyles
                    required
                    type="number"
                    id="preco"
                    name="preco"
                    placeholder="Preço"
                />
                <InputStyles
                    required
                    type="number"
                    id="quantidade"
                    name="quantidade"
                    placeholder="Quantidade"
                />
                <ButtonStyles
                    type="submit"
                >
                    Cadastrar
                </ButtonStyles>
            </FormStyles>
        </AddProductStyles>
    );
}