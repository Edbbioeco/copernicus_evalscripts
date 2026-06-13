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

## Coleções ----

colecoes <- c("sentinel-1", "sentinel-2", "landsat")

colecoes
