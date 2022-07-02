import Centro from "./Centro.jsx"
import Title from "./Title.jsx"
import "./Centro.css"

function App(){

	const titulo=[
		{
			letreiro: "Mais Lidas",

		},
	];


	const noticia=[
		{
		   posicao: "1",
		   descricao: "Funcionária que denunciou procurador diz que agressor 'desprezava mulheres' e teme sair na rua:'Muito medo'",
		},
	 
	
		{
		   posicao: "2",
		   descricao: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nesta quinta; veja se você está no grupo",
		},


		{
			posicao: "3",
			descricao: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro",
		 },

		 
		 {
			posicao: "4",
			descricao: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos",
		 },

		 
		 {
			posicao: "5",
			descricao: "Almir Sater é 'parado em blitz' e policiais tietam cantor:'o senhor é o dono dessa chalana?'",
		 },
 


	 ];



	 return (

		<div>
	
		  {titulo.map((tit) => {
			return <Title
	
			letreiro={tit.letreiro}

			/>;
	
	
		  })}
		 
		

		<div>
	
		  {noticia.map((noti) => {

			return <Centro 
	
			  posicao={noti.posicao}
			  descricao={noti.descricao}
			/>;
	
	
		  })}
		 
		

			</div>


		</div>
	  );
	}
	
	export default App