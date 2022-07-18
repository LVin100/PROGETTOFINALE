Benvenuto nel mio nuovo Progetto che conclude il percorso di Start 2 Impact!

Troverai un simil-ecommerce realizzato con un front-end in angular e un back-end in php che si rappota ad un database in MySQL.

La premessa è finita, iniziamo!

ORIENTARSI NEI FOLDER:
il progetto presenta la seguente struttura: 
  -app/
  -core/
  -eCommerceApp/
  .env
  .htaccess
  index.php
  migrations.sql
  routes.php

nelle cartelle app/ e core/ si trova il back-end in php. Nella prima ci sono i modelli models/(Prodotti, Ordini e Utenti) e la cartella Controllers che, come si può 
intuire dal nome, contiene i Controller che gestiscono le varie chiamate.
Nella cartella Core/ invece ci sono i file che reggono la struttura del backend, quindi la classe APIRequest per le chiamate CRUD, un file bootstrap conenente i vari
percorsi, il db.php che definisce la struttura del database e il file Router.php. 
Fuori da queste cartelle si trovano i file index.php e routes.php, il secondo contiene i percorsi (letti dall'htaccess) che fanno chiamate con quale metodo. 

Il file migrations.sql serve per creare il database chiamato "cleanocean" e contenente le tre tabelle: Products, Sales e Users, già ricche di contenuti. 
il file .env è necessario per inserire le coordinate del database in cui si importa "cleanocean", ovvero il file migrations.sql, quindi sostituire i testi in maiuscolo
con i dati relativi al proprio ambiente. 

Passiamo adesso al lato front-end, la cartella eCommerceApp/src/app qui ci sono tutti i componenti, i servizi e i moduli che reggono l'applicazione. 
L'auth per la gestione del login, il cart per la gestione del carrello, un header globale, la funzionalità login, la pagina di cortesia "page-not-found", 
la funzionalità registazione e la parte dedicata ai prodotti e agli utenti. 


Adesso passiamo all'UTILIZZO E FUNZIONALITà DELL'APPLICAZIONE: 
entrando da terminale nella cartella eCommerceApp e usando il comando "ng serve", sulla porta di default localhost:4200 verrà avviata l'applicazione e ci si troverà
nella Dashboard, qui si possono vedere tutti i prodotti presenti nel database cleanocean, nella tabella Products. Cliccando su "Buy Now" si accede alla pagina
di dettaglio del prodotto: a sinistra una foto simbolica (presa da https://picsum.photos/ sito utilissimo per produrre immagini casuali che cambiano di volta in volta, 
anche se questo aspetto con angular non avviene, in quanto si tratta di una Single Page Application). a destra si può leggere il nome del prodotto, una breve descrizione
(un lorem in quanto non ancora presente nel database Products la colonna "breve descrizione", il costo, la quantità disponibile, un form select per determinare la
quantità da comprare (che non deve essere superiore alla quantità disponibile o appare un messaggio di errore), il bottone per aggiungere il prodotto al carrello
nella quantità indicata, e un collapse che mostra ulteriori dettagli (stesso discorso per la breve descrizione).

Nell'header sarà sempre presente il tasto Go Home, che riporta alla dashboard, e dal lato opposto il carrello (con una angular icon del carrello) e il bottone per effettuare il login. 
Dopo aver aggiunto un prodotto al carrello è possibile procedere all'acquisto, quindi, cliccando il tasto "BUY" apparirà un messaggio di errore, perchè prima di acquistare
bisogna essere loggati. Cliccare dunque su login qui, per accedere avete due possibilità, o sfruttare i dati di esempio nel database User, oppure registrare un vostro
utente. Purtroppo il form di registrazione non è ottimizzato, quindi una volta creato il vostro utente dovrete comunque effettuae il login.  
Effettuato il login si può accedere all'area personale, sempre raggiungibile d'ora in poi, premendo il tasto log in. prima di esplorare le funzioni di quest'area torniamo 
al nostro carrello. 
Cliccando sul carrello notiamo che i prodotti che avevamo selezionato in precedenza non sono stati cancellati! dunque si può procedere all'acquisto che mostrerà un 
messaggio di successo e redirigerà alla dashboard. (Chiamata CREATE)

Guardiamo ora alle funzioni della propria area personale: 
Manage Orders: il primo bottone a sinistra, in questo spazio possiamo eliminare gli ordini che abbiamo effettuato, ci sono però alcune cose da specificare: 
1. Gli ordini sono costituiti nel seguente modo: ogni prodotto crea un singolo ordine con un proprio codice identificativo ed univoco, il codice del prodotto acquistato, 
la quantità acquistata e il codice dell'utente che l'ha effettuato. 
2. Nè l'eliminazione dell'ordine nè la creazione di un ordine dal carrello modificano effettivamente la quantità del prodotto nel database, 
3. Per velocizzare, l'esperienza utente dell'area manage orders è poco curata in quanto non appare il nome del prodotto e invece di creare un codice solo per ordine
ogni singolo ordine appare come ordine a sè stante. 

in questa pagina possiamo comodamente cancellare gli ordini col tasto "Elimina Ordine" (Chiamata DELETE). 
