const btnCalcular = document.getElementById("botaoCalcular");
const res = document.getElementById("res");
btnCalcular.addEventListener("click", handleCalculate);
const arr = ["Peso", "Altura", "IMC", "Resultado"];

function handleCalculate() {
  const peso = parseFloat(
    document.getElementById("inputPeso").value.replace(/,/g, ".")
  );
  const altura = parseFloat(
    document.getElementById("inputAltura").value.replace(/,/g, ".")
  );

  if (!peso || !altura) {
    res.classList.add("error");
    return (res.innerHTML = "Preencha todos os campos!");
  } else {
    const imc = (peso / (altura / 100) ** 2).toFixed(2);
    const resultado = getClassification(imc);
    createElement(peso, altura, imc, resultado);
    btnCalcular.textContent = "Refazer";

    // Limpar os inputs
    document.getElementById("inputPeso").value = "";
    document.getElementById("inputAltura").value = "";
  }
}

function createElement(peso, altura, imc, resultado) {
  res.innerHTML = "";

  const arrR = [peso, altura, imc, resultado];

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const trHead = document.createElement("tr");
  const trBody = document.createElement("tr");

  res.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);

  thead.appendChild(trHead);
  tbody.appendChild(trBody);

  arr.forEach((item) => {
    const thHead = document.createElement("th");
    thHead.textContent = item;
    trHead.appendChild(thHead);
  });

  arrR.forEach((item) => {
    const tdBody = document.createElement("td");
    tdBody.textContent = item;
    trBody.appendChild(tdBody);
  });
}

function getClassification(imc) {
  if (imc < 17) {
    return "Muito abaixo do peso";
  }
  if (imc < 18.49) {
    return "Abaixo do peso";
  }
  if (imc < 24.99) {
    return "Peso normal";
  }
  if (imc < 29.99) {
    return "Acima do peso";
  }
  if (imc < 34.99) {
    return "Obesidade I";
  }
  if (imc < 39.99) {
    return "Obesidade II (severa)";
  }
  if (imc > 40) {
    return "Obesidade III (mórbida)";
  } else {
    return "Error!";
  }
}
