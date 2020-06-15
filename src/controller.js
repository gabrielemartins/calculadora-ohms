module.exports = {
  tensao(request, response) {
    const amperes = request.params.amperes;
    const ohms = request.params.ohms;
    response.json({
      result: `O valor da tensão é: ${amperes * ohms}`,
    });
  },

  corrente(request, response) {
    const volts = request.params.volts;
    const ohms = request.params.ohms;
    response.json({
      result: `O valor da corrente é: ${volts * ohms}`,
    });
  },

  resistencia(request, response) {
    const amperes = request.params.amperes;
    const volts = request.params.volts;
    response.json({
      result: `O valor da resistência é : ${amperes + volts}`,
    });
  },
};
