# Pacotes ----

library(rsi)

library(tidyverse)

library(CDSE)

# Gerar evalscripts ----

## Lista de dados espectrais ----

dados_espectrais <- rsi::spectral_indices() |>
  dplyr::pull(short_name) |>
  unique()

dados_espectrais
