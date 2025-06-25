
-- ⚠️ ATTENTION ⚠️
-- Ne pas décommenter les lignes DROP TABLE si vous ne savez pas ce que vous faites.

-- DROP TABLE IF EXISTS utilisateurs;
-- DROP TABLE IF EXISTS codes_premium;
-- DROP TABLE IF EXISTS garanties;
-- DROP TABLE IF EXISTS tickets;

-- 👤 Utilisateurs (liés à Discord)
CREATE TABLE IF NOT EXISTS utilisateurs (
  id_discord VARCHAR(64) PRIMARY KEY, -- ID utilisateur Discord
  username VARCHAR(255) NOT NULL,     -- Nom d'utilisateur
  premium BOOLEAN DEFAULT FALSE,      -- A le rôle premium ou non
  date_premium DATETIME NULL,         -- Date d'activation du premium
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 🔐 Codes premium à usage unique, non nominatifs au départ
CREATE TABLE IF NOT EXISTS codes_premium (
  code VARCHAR(64) PRIMARY KEY,           -- Le code à entrer
  utilisé BOOLEAN DEFAULT FALSE,          -- Le code a-t-il été utilisé ?
  id_utilisateur VARCHAR(64) NULL,        -- ID Discord de l'utilisateur qui l'a utilisé
  date_utilisation DATETIME NULL,         -- Quand le code a été utilisé
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
);


-- 🛡️ Garantie 1 an
CREATE TABLE IF NOT EXISTS garanties (
  id_discord VARCHAR(64) PRIMARY KEY,     -- Utilisateur concerné
  date_activation DATETIME NOT NULL,      -- Date d'activation de la garantie
  date_expiration DATETIME NOT NULL,      -- Date de fin de garantie
  rappel_envoyé BOOLEAN DEFAULT FALSE     -- Rappel envoyé ?
);

-- 🎫 Tickets de support
CREATE TABLE IF NOT EXISTS tickets (
  id_ticket INT AUTO_INCREMENT PRIMARY KEY,
  id_discord VARCHAR(64) NOT NULL,         -- Créateur
  type_ticket VARCHAR(50) NOT NULL,        -- Ex: "support", "commande", "candidature"
  statut VARCHAR(20) DEFAULT 'ouvert',     -- "ouvert", "fermé", etc.
  date_ouverture DATETIME DEFAULT CURRENT_TIMESTAMP,
  date_fermeture DATETIME NULL
);
