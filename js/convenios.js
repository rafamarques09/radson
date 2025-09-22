const convenios = [
    "ADVOGADOS RECH E OLIVEIRA", "APOPECS", "ASFAP", "ASSAF", "ASSEFAZ", "ATENDBEM", "ATENDCAR", "BELAPAN", "CABERGS", "CAIXA DE ASSISTÊNCIA DOS ADVOGADOS RS", "CASSI", "CAUSO", "CENTRO CLINICO GAUCHO - CCG", "CENTRO DE REABILITAÇÃO ESPORTIVA LTDA", "CHIMAMED", "CIJACUI", "CISVALE", "CLINICA AMOR SAUDE", "CLINICA PREVINI", "DIERSMANN ASSISTENCIA FAMILIAR", "DS ENGENHARIA", "E. KOPP", "ELISEU KOPP", "ERGOSS", "ESPORTE CLUBE GUARANI", "ESPORTE CLUBE UNIÃO CORINTHIANS", "FAMILIA ANA NERY", "FUNERARIA GASS", "FUNERARIA HALMENSCHLAGER", "FUSEX", "GEAP", "GERMANI ALIMENTOS", "HOSPITAL ANA NERY", "HOSPITAL CANDELARIA", "HOSPITAL SANTA CRUZ", "HOSPITAL VERA CRUZ", "IBCM", "INDUCAL", "IPE", "JTI PROCESSADORA", "LIGA FEM. BOQ. LEAO", "MEDFACIL - LAJEADO", "METALURGICA MOR", "PESQUISA CLINICA HAN", "PHILIP MORRIS", "PLAMART", "PLANO DE ASSISTENCIA FAMILIAR", "PLANO FRIETAS", "PREMIUM TABACOS", "PREVINA", "PREVISUL", "PRODENT", "PROTEGE", "PROVIDA", "PRO VIDA SAUDE OCUP.", "PRONTY ASSESSORIA ORGANIZACIONAL", "SAUDE CAIXA", "SAUDE PAZ", "SC AVENIDA", "SC SANTA CRUZ", "SC SANTA CRUZ - LOCAÇÃO", "SEGURA MED", "SESC", "SESI VITA", "SIND. COMÉRCIO EMPREGADOS SCS E REGIÃO", "SIND. EMP. COM. P.GRANDE, P. SOBRADO E RP", "SIND. IND. ALIMENTAÇÃO SCS", "SIND. METALURGICOS SCS", "SIND. RURAL CANDELARIA", "SIND. RURAL SCS", "SIND. TRAB. IND. FUMO E ALIM. SCS E REGIÃO", "SIND. TRAB. NAS IND. ALIMENTAÇÃO DE RP", "SIND. TRAB. AGRICULTORES FAM. GRAMADO X.", "SIND. TRAB. IND. METALMEC MAT.ELETRICOS SCS", "SIND. TRAB. IND. CONSTRUÇÃO E MOB. RP", "SIND. TRAB. RURAIS DE PANTANO GRANDE", "SIND. TRAB. RURAIS DE PASSO SOBRADO", "SIND. TRAB. RURAIS DE RIO PARDO", "SIND. TRAB. RURAIS DE VENANCIO AIRES", "SIND. TRAB. RURAIS AGRIC. FAMILIAR VERA C.", "SIND. VIGILANTES SCS E REGIÃO", "SINDIASSEIO", "SINDIPOSTOS", "SINDIRODOVIARIOS", "SÓCIOS HOSP. ANA NERY", "STR SANTA CRUZ", "SUS BPA", "SUS INTERNO", "SUS PMAH", "SUS UPA", "UNIFACIL", "UNIMED", "UNIVERSALMED", "VALE SUL", "WOLKMER E CIA LTDA"
];


// Agrupar por letra inicial
const grouped = {};
convenios.sort().forEach(item => {
    const letter = item[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(item);
});


const listDiv = document.getElementById('list');
for (const letter in grouped) {
    const section = document.createElement('div');
    section.classList.add('letter-section');


    const h2 = document.createElement('h2');
    h2.textContent = letter;
    section.appendChild(h2);


    const ul = document.createElement('ul');
    grouped[letter].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    section.appendChild(ul);


    listDiv.appendChild(section);
}


// Função de busca
document.getElementById('search').addEventListener('input', function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll('li').forEach(li => {
        if (li.textContent.toLowerCase().includes(value)) {
            li.style.display = '';
            if (value) {
                const regex = new RegExp(`(${value})`, 'gi');
            } else {
                li.innerHTML = li.textContent;
            }
        } else {
            li.style.display = 'none';
        }
    });
});
document.getElementById('search').addEventListener('input', function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll('.letter-section').forEach(section => {
        let hasVisible = false;
        section.querySelectorAll('li').forEach(li => {
            if (li.textContent.toLowerCase().includes(value)) {
                li.style.display = '';
                if (value) {
                    const regex = new RegExp(`(${value})`, 'gi');
                    li.innerHTML = li.textContent.replace(regex, '<span class="highlight">$1</span>');
                } else {
                    li.innerHTML = li.textContent;
                }
                hasVisible = true;
            } else {
                li.style.display = 'none';
            }
        });
        // Se não tiver nenhum resultado visível, esconde a seção inteira
        section.style.display = hasVisible ? '' : 'none';
    });
});
