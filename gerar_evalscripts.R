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

## Gerar evalscripts ----

evalscripts <- purrr::map(
  dados_espectrais,
  purrr::in_parallel(

    \(espec){

      purrr::map(colecoes,
                 \(colecoes){

                   tryCatch(

                     rsi::spectral_indices() |>
                       dplyr::filter(short_name == espec) |>
                       CDSE::MakeEvalScript(constellation = colecoes),
                     error = \(e) NULL

                   )

                   }

                 )

      }

    ),
  .progress = TRUE) |>
  purrr::list_flatten() |>
  purrr::compact()

evalscripts
