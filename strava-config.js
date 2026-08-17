// QualiPraxis Run — configuração compartilhada do envio automático pro Strava.
// Todos os treinos HTML carregam este arquivo (<script src="strava-config.js">),
// assim o APP_SECRET fica num lugar só e você nunca mais precisa digitar em cada treino novo.
//
// Se um dia trocar a senha aqui, lembre de atualizar o mesmo valor no secret
// APP_SECRET lá no Cloudflare Worker (Settings > Variables and Secrets).

const STRAVA_WORKER_URL = 'https://qualipraxis-run.mmaarrccooss.workers.dev/upload';
const STRAVA_APP_SECRET = 'quali2026strava1007';
