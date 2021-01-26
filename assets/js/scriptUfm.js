/*
Essa código executa a função calcularImc disparada atraves do evento onclick quando 
o usuário clica no link calcular.
*/

function calcularUFM(){

	var tipo_empresa = window.document.getElementById('tipoDeEmpresa')
	var tipo_licenca = window.document.getElementById('tipoDeLicenca')
	var tipo_grau = window.document.getElementById('tipoDeGrau')
	var resultado  = window.document.getElementById('resultado')

	var value_empresa = tipo_empresa.options[tipo_empresa.selectedIndex].value
	var value_licenca = tipo_licenca.options[tipo_licenca.selectedIndex].value
	var value_grau = tipo_grau.options[tipo_grau.selectedIndex].value
	
	//LICENCA PREVIA
	if(value_empresa == 'PESSOA_FISICA'  &&  value_licenca == 'LICENCA_PREVIA'  && value_grau == 'PEQUENO'){
		var reais = (25 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_PREVIA'  && value_grau == 'MEDIO'){
		var reais = (100 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'ALTO'){
		var reais = (200 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'PEQUENO'){
		var reais = (100 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'MEDIO'){
		var reais = (250 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'ALTO'){
		var reais = (350 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'PEQUENO'){
		var reais = (150 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'MEDIO'){
		var reais = (300 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'ALTO'){
		var reais = (450 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'PEQUENO'){
		var reais = (250 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'MEDIO'){
		var reais = (350 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_PREVIA' && value_grau == 'ALTO'){
		var reais = (550 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	//LICENCA DE INSTALAÇÃO
	if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'PEQUENO'){
		var reais = (25 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'MEDIO'){
		var reais = (100 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'ALTO'){
		var reais = (200 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'PEQUENO'){
		var reais = (100 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'MEDIO'){
		var reais = (250 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'ALTO'){
		var reais = (350 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'PEQUENO'){
		var reais = (150 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'MEDIO'){
		var reais = (300 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'ALTO'){
		var reais = (450 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'PEQUENO'){
		var reais = (150 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'MEDIO'){
		var reais = (300 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_DE_INSTALACAO' && value_grau == 'ALTO'){
		var reais = (450 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}
	
	//LICENÇA DE OPERAÇÃO
	if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'PEQUENO'){
		var reais = (25 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'MEDIO'){
		var reais = (100 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'ALTO'){
		var reais = (200 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'PEQUENO'){
		var reais = (100 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'MEDIO'){
		var reais = (250 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'ALTO'){
		var reais = (400 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'PEQUENO'){
		var reais = (150 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'MEDIO'){
		var reais = (300 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'ALTO'){
		var reais = (500 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'PEQUENO'){
		var reais = (250 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'MEDIO'){
		var reais = (350 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_DE_OPERACAO' && value_grau == 'ALTO'){
		var reais = (600 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	//ALVARÁ VERDE
	if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'ALVARA_VERDE' && value_grau == 'INSIGNIFICANTE'){
		var reais = (15 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'MICRO_EMPRESA' && value_licenca == 'ALVARA_VERDE' && value_grau == 'INSIGNIFICANTE'){
		var reais = (30 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}
	
	//LICENÇA CORRETIVA
	if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'PEQUENO'){
		var reais = (60 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'MEDIO'){
		var reais = (180 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'PESSOA_FISICA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'ALTO'){
		var reais = (250 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'PEQUENO'){
		var reais = (180 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'MEDIO'){
		var reais = (300 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_PEQUENA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'ALTO'){
		var reais = (450 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'PEQUENO'){
		var reais = (230 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'MEDIO'){
		var reais = (350 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_MEDIA' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'ALTO'){
		var reais = (500 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'PEQUENO'){
		var reais = (300 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'MEDIO'){
		var reais = (400 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}else if(value_empresa == 'EMPRESA_GRANDE' && value_licenca == 'LICENCA_CORRETIVA' && value_grau == 'ALTO'){
		var reais = (600 * 2.59).toFixed(2)
		resultado.innerHTML = 'TAXA R$ '+reais
	}

	
}

