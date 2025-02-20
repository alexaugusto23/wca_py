//"customCellFunction": "function(hotInstance, TD, row, col, prop, value, cellProperties){ const dataRow = hotInstance.getSourceDataAtRow(row); if (dataRow.id_col==-1){TD.style.color = '#000';TD.style.background = '#adadad';cellProperties.readOnly = false;}}"


// Permite editar a linha do form quando a informação veem do model dataframe.
let func = function(hotInstance, TD, row, col, prop, value, cellProperties)
{ 
    const dataRow = hotInstance.getSourceDataAtRow(row); 
    if (dataRow.id_key == 0)
        {TD.style.color = '#000';
        TD.style.background = '#F3F3F3';
        cellProperties.readOnly = false;
    }
}

// Funcionou
let funcA = function(hotInstance, TD, row, col, prop, value, cellProperties)
{ 
    const dataRow = hotInstance.getSourceDataAtRow(row); 
    if (dataRow.id_key == 'tot_key') { 
        TD.style.background = '#F3F3F3'; TD.style.fontWeight = 'bold'; 
    } 
}


// Moinhos Old
function funcB(hotInstance, TD, row, col, prop, value, cellProperties) 
{   const dataRow = hotInstance.getSourceDataAtRow(row); 
    const rel = dataRow.relatorio; 
    if (dataRow.id >= 0) { 
        cellProperties.readOnly = false; 
    } 
    if (rel == 'Marchas') { 
        TD.style.background = '#F3F3F3'; TD.style.fontWeight = 'bold'; 
    } 
    if (rel == 'Horarios de Ponta') { 
        TD.style.background = '#F3F3F3'; 
    } 
    if (rel == 'Manutenção Semanal') { 
        TD.style.background = '#F3F3F3'; 
    } 
    if (rel == 'Grandes Paradas') { 
        TD.style.background = '#FFF8E3'; 
    } 
    if (rel == 'Dias Uteis') { 
        TD.style.background = '#FFF8E3C'; 
    } 
    if (rel == 'Horas Manuntenção') { 
        TD.style.background = '#FFF8E3'; 
    } 
    if (rel == 'Outros') { 
        TD.style.background = '#FFF8E3'; 
    } 
}

// Moinhos new
function funcc(hotInstance, TD, row, col, prop, value, cellProperties) 
{   const dataRow = hotInstance.getSourceDataAtRow(row); 
    const rel = dataRow.relatorio; 
    if (dataRow.id >= 0) { cellProperties.readOnly = false; } 
    if (rel == 'Marchas') { TD.style.background = '#F3F3F3'; TD.style.fontWeight = 'bold'; } 
    if (rel == 'Horarios de Ponta') {
        if (value == 0){TD.style.background = '#EAFB15'; TD.style.color = '#EAFB15';}
        else{TD.style.background = '#F3F3F3';}
        }  
    if (rel == 'Manutenção Semanal') { TD.style.background = '#F3F3F3'; } 
    if (rel == 'Grandes Paradas') { TD.style.background = '#FFF8E3'; } 
    if (rel == 'Dias Uteis sem Contrato') { TD.style.background = '#FFF8E3C'; } 
    if (rel == 'Horas Manuntenção') { TD.style.background = '#FFF8E3'; } 
    if (rel == 'Outros') { TD.style.background = '#FFF8E3'; } }

// Mudança no form 290622 Moinho
function funcc(hotInstance, TD, row, col, prop, value, cellProperties) 
{   const dataRow = hotInstance.getSourceDataAtRow(row); 
    const rel = dataRow.relatorio; 
    if (dataRow.id >= 0) { cellProperties.readOnly = false; } 
    if (rel == 'Marchas') { TD.style.background = '#D8EBBF'; TD.style.fontWeight = 'bold'; } 
    if (rel == 'Horarios de Ponta') {
        if (value <= 0){ TD.style.background = '#EAFB15'; TD.style.color = '#EAFB15';}
        else{TD.style.background = '#F3F3F3';}
        }  
    if (rel == 'Manutenção Semanal') { TD.style.background = '#F3F3F3'; } 
    if (rel == 'Grandes Paradas') { TD.style.background = '#FFF8E3'; } 
    if (rel == 'Com ou Sem Contrato') { TD.style.background = '#FFF8E3'; } 
    if (rel == 'Horas Manuntenção') { TD.style.background = '#FFF8E3'; } 
    if (rel == 'Outros') { TD.style.background = '#FFF8E3'; } } 

// Mudança no form 040722 Moinho
function (hotInstance, TD, row, col, prop, value, cellProperties) {
    const dataRow = hotInstance.getSourceDataAtRow(row);
    const rel = dataRow.relatorio;
    if (dataRow.id >= 0) {
        cellProperties.readOnly = false;
    }
    if (rel == 'Marchas') {
        TD.style.background = '#D8EBBF';
        TD.style.fontWeight = 'bold';
    }
    if (rel == 'Horarios de Ponta') {
        if (value == 0) {
            TD.style.background = '#EAFB15';
            TD.style.color = '#EAFB15';
        } else {
            TD.style.background = '#F3F3F3';
        }
    }
    if (rel == 'Manutenção Semanal') {
        TD.style.background = '#F3F3F3';
    }
    if (rel == 'Grandes Paradas') {
        TD.style.background = '#FFF8E3';
    }
    if (rel == 'Com ou Sem Contrato') {
        TD.style.background = '#FFF8E3C';
    }
    if (rel == 'Horas Manuntenção') {
        TD.style.background = '#FFF8E3';
    }
    if (rel == 'Outros') {
        TD.style.background = '#FFF8E3';
    }

    if (dataRow.id >= 0) {

        if (rel == 'Horarios de Ponta') {
        
        cellProperties.format = '0.000000'
    }
    }
}
