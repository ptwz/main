// OpenAero rules19-nzac.js file

// This file is part of OpenAero.

//  OpenAero was originally designed by Ringo Massa and built upon ideas
//  of Jose Luis Aresti, Michael Golan, Alan Cassidy and many others. 

//  OpenAero is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.

//  OpenAero is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.

//  You should have received a copy of the GNU General Public License
//  along with OpenAero.  If not, see <http://www.gnu.org/licenses/>.

// This file defines NZAC Recreational/Sports rules for 2016/2017

//###############################################################################
//##### NZAC BASE ###############################################################
//###############################################################################

rules.push("[NZAC Base]");
rules.push("fam1-min=1");
rules.push("fam7-min=1");
rules.push("fam8-min=1");
//rules.push("group-fspinrec=^9\\.[11|12]");
rules.push("combined-repeat=1");

//###############################################################################
//##### NZAC RECREATIONAL FREE ##################################################
//###############################################################################

rules.push("[NZAC Recreational Free]");
rules.push("posnl=6");
rules.push("basefig-max=12");
rules.push("fam7-min=1");
rules.push("fam8-min=1");
rules.push("spin-min=1");
rules.push("k-max=93");
rules.push("allow=^[1-9]"); //all figures are allowed for the Free program
rules.push("group-frollrec=^9\\.[1234]");
rules.push("frollrec-name=family 9.1-9.4 (roll)");
rules.push("frollrec-min=1");
rules.push("group-fturnrec=^2\\.[12]");
rules.push("fturnrec-name=family 2.1-2.2 (turn)");
rules.push("fturnrec-min=1");
rules.push("group-basefignorept=^[2-8]");
rules.push("basefignorept-repeat=1");
rules.push("fspinrec-name=family 9.11-9.12 (spin)");
rules.push("fspinrec-max=1");
rules.push("more=NZAC base");

//###############################################################################
//##### NZAC SPORTS FREE ########################################################
//###############################################################################

rules.push("[NZAC Sports Free]");
rules.push("posnl=10");
rules.push("basefig-max=12");
rules.push("fam7-min=1");
rules.push("fam8-min=1");
rules.push("spin-min=1");
rules.push("k-max=140");
rules.push("allow=^[1-9]"); //all figures are allowed for the Free program
rules.push("group-frollsport=^9\\.[1234]");
rules.push("frollsport-name=family 9.1-9.4 (roll)");
rules.push("frollsport-min=1");
rules.push("group-fturnsport=^2\\.[12]");
rules.push("fturnsport-name=family 2.1-2.2 (turn)");
rules.push("fturnsport-min=1");
rules.push("group-basefignorept=^[2-8]");
rules.push("basefignorept-repeat=1");
rules.push("fspinrec-name=family 9.11-9.12 (spin)");
rules.push("fspinrec-max=1");
rules.push("more=NZAC Base");

/***********************************************************************
 * 2019 NZAC rules as copied from 2018 CIVA rules **********************
 **********************************************************************/
 

//#######################################################################################
//#
//# Define Unlimited programmes.

//######################################################################################
//##### NZAC UNLIMITED FREE KNOWN ######################################################
//######################################################################################

rules.push("[NZAC Unlimited Free Known]");
rules.push("posnl=40");//assume no line judges
rules.push("poslj=20");
rules.push('reference="@A" o3f,3 "@B" 34bb3if-> "@C" -``6is,2irpf,2if "@D" -,6ta`24. "@E" 3jio51-');

rules.push("more=NZAC/IAC Unlimited Free Known");

//######################################################################################
//##### NZAC/IAC UNLIMITED FREE KNOWN ##################################################
//######################################################################################

rules.push("(NZAC/IAC Unlimited Free Known)");

rules.push("basefig-min=10");
rules.push("basefig-max=10");
rules.push("k-max=450");

rules.push("basefig-repeat=1");
rules.push("roll-repeat=1");
rules.push("snap-repeat=1");
rules.push("spin-repeat=1");

rules.push("group-roller=^2\\.(2\\.[3-7]|3\\.[2-6]|4\\.[2-8])");
rules.push("roller-name=Rolling turn, family 2.2.3 to 2.2.7, 2.3.2 to 2.3.6, 2.4.2 to 2.4.8");
rules.push("roller-name_fr=Tonneaux en virage, famille 2.2.3 à 2.2.7 ou 2.3.2 à 2.3.6 ou 2.4.2 à 2.4.8");

rules.push("fam1-min=1");
rules.push("roller-min=1");
rules.push("fam5-min=1");
rules.push("fam6-min=1");
rules.push("fam7-min=1");
rules.push("fam8-min=1");

rules.push("spin-min=1");

rules.push("isnap-min=2");
rules.push("osnap-min=2");

rules.push("opposite-min=1");//one opposite roll is required!

// rules.push("allow=^[1-9]");//all figures are allowed for the Free Programme

rules.push("figure-letters=ABCDE");

// what info should be filled out
rules.push("infocheck=pilot;actype;acreg;positioning");

//#######################################################################################
//##### NZAC UNLIMITED UNKNOWNS #########################################################
//#######################################################################################

rules.push("[NZAC Unlimited Free Unknown]");
rules.push("additionals=4/24");
rules.push("figure-letters=ABCDEFGHIJ");

rules.push("more=NZAC Unlimited Unknown");

rules.push("(NZAC Unlimited Unknown)");
rules.push("poslj=10");
rules.push("posnl=40");
rules.push("group-one=^1\\.(1\\.[6-9]|1\\.1[01])\\.[34]");
rules.push("one-name=family 1.1.6-11 columns 3&4");
rules.push("one-name_fr=famille 1.1.6 à 1.1.11 colonnes 3 et 4");
rules.push("group-two=^8\\.(4\\.[1-4]|4\\.[7-9]|4\\.10|5\\.[1-2]|6\\.[1-2])\\.[34]");
rules.push("two-name=family 8.4.1-4,8.4.7-10,8.5.1-2,8.6.1-2 columns 3&4");
rules.push("two-name_fr=famille 8.4.1-4,8.4.7-10,8.5.1-2,8.6.1-2 colonnes 3 et 4");
rules.push("group-vsnap=^9\\.(9|10)\\.[16]\\.");
rules.push("vsnap-name=vertically climbing flick");
rules.push("vsnap-name_fr=déclenché ascendant vertical");
//rules.push("vsnap-rule=Sporting Code Section 6 Part 1 2.3.1.4");
rules.push("one-max=2");
rules.push("two-max=2");
rules.push("isnap-max=4");
rules.push("osnap-max=4");
rules.push("vsnap-min=1");
rules.push("snap-max=6");

rules.push("snap-maxperfig=1");

rules.push("k-minperfig=22");

rules.push("basefig-min=10");
rules.push("basefig-max=10");

rules.push("basefig-repeat=1");
rules.push("roll-repeat=1");
rules.push("snap-repeat=1");
rules.push("spin-repeat=1");

rules.push("more=NZAC Unlimited Unknownbase");

//# a single Unknown figure, without sequence requirements
rules.push("(NZAC Unlimited Unknownfigure)");
rules.push("snap-maxperfig=1");
rules.push("k-minperfig=22");
rules.push("basefig-repeat=1");
rules.push("roll-repeat=1");
rules.push("snap-repeat=1");
rules.push("spin-repeat=1");
rules.push("more=NZAC Unlimited Unknownbase");

//###################################################################################################
rules.push("(NZAC Unlimited Unknownbase)");

rules.push("conv-horstop=^9\\.(1|9|10)\\.[38]=1 ; ^9\\.2\\.3\\.4 = 2 ;^9\\.2\\.3\\.6 = 3 ;^9\\.2\\.3\\.8 = 4 ;^9\\.4\\.3\\.([1-8]) = $1; ^9\\.8\\.3\\.1 = 2;^9\\.8\\.3\\.2 = 4;^9\\.8\\.3\\.3 = 6;^9\\.8\\.3\\.4 = 8; ^9\\.=r ; ^0\\.=z");
rules.push("rule-Hor10stop = horstop:<11");
rules.push("why-Hor10stop  = a maximum of 10 stops are allowed on straight horizontal lines rolls");
rules.push("why_fr-Hor10stop  = un maximum de 10 arrets est autorisé dans les rotations des lignes droites horizontales");

// added  "^9\\.(9|10)\\. = f" to next 8 for flick checking
rules.push("conv-climbqtrs=^9\\.([1-9]|10)\\.[1267]\\.([1-8]) = $2 ; ^9\\.(9|10)\\. = f ; ^9\\. = r ; ^0\\.=z");
rules.push("conv-climbstop=^9\\.(1|9|10)\\.[1267]=1 ; ^9\\.2\\.[12]\\.4 = 2 ;^9\\.2\\.[12]\\.6 = 3 ;^9\\.2\\.[12]\\.8 = 4 ;^9\\.4\\.[12]\\.([1-8]) = $1;^9\\.8\\.[12]\\.1 = 2;^9\\.8\\.[12]\\.2 = 4;^9\\.8\\.[12]\\.3 = 6;^9\\.8\\.[12]\\.4 = 8 ; ^9\\.(9|10)\\. = f; ^9\\.=r ; ^0\\.=z");

rules.push("conv-upqtrs=^9\\.([1-9]|10)\\.[16]\\.([1-8]) = $2 ; ^9\\.(9|10)\\. = f ; ^9\\. = r ; ^0\\.=z");
rules.push("conv-upstop=^9\\.(1|9|10)\\.[16]=1 ; ^9\\.2\\.1\\.4 = 2 ;^9\\.2\\.1\\.6 = 3 ;^9\\.2\\.1\\.8 = 4 ;^9\\.4\\.1\\.([1-8]) = $1; ^9\\.8\\.1\\.1 = 2;^9\\.8\\.1\\.2 = 4;^9\\.8\\.1\\.3 = 6;^9\\.8\\.1\\.4 = 8 ; ^9\\.(9|10)\\. = f; ^9\\.=r ; ^0\\.=z");

rules.push("conv-diagupqtrs=^9\\.([1-9]|10)\\.[27]\\.([1-8]) = $2 ; ^9\\.(9|10)\\. = f ; ^9\\. = r ; ^0\\.=z");
rules.push("conv-diagupstop=^9\\.1\\.2=1 ;^9\\.(9|10)\\.[27]=2 ; ^9\\.2\\.2\\.4 = 2 ;^9\\.2\\.2\\.6 = 3 ;^9\\.2\\.2\\.8 = 4 ;^9\\.4\\.2\\.([1-8]) = $1; ^9\\.8\\.2\\.1 = 2;^9\\.8\\.2\\.2 = 4;^9\\.8\\.2\\.3 = 6;^9\\.8\\.2\\.4 = 8 ; ^9\\.(9|10)\\. = f; ^9\\.=r ; ^0\\.=z");

rules.push("conv-downqtrs=^9\\.([1-9]|10)\\.(5|10)\\.([1-8]) = $3 ; ^9\\.(9|10)\\. = f ; ^9\\. = r ; ^0\\.=z");
// Changed in 1.4.3
// 9.8.5.2 (4x8) is converted to 3, to assure allowing it when it exists
// alone, but not combined with other rolls
rules.push("conv-downstop=^9\\.(1|9|10)\\.(5|10)=1 ; ^9\\.2\\.5\\.4 = 2 ;^9\\.2\\.5\\.6 = 3 ;^9\\.2\\.5\\.8 = 4 ;^9\\.4\\.5\\.([1-8]) = $1; ^9\\.8\\.5\\.1 = 2;^9\\.8\\.5\\.2 = 3;^9\\.8\\.5\\.3 = 6;^9\\.8\\.5\\.4 = 8 ; ^9\\.(9|10)\\. = f; ^9\\.=r ; ^0\\.=z");

rules.push("rule-VUP450 = upqtrs:<6");
rules.push("why-VUP450  = a maximum of 450 degrees are allowed on vertical up opposite rolls");
rules.push("why_fr-VUP450  = un maximum de 450° est permis sur les rotations alternées verticales montantes");

rules.push("rule-DIAGUP540 = diagupqtrs:<7");
rules.push("why-DIAGUP540  = a maximum of 540 degrees are allowed on diagonal up opposite rolls");
rules.push("why_fr-DIAGUP540  = un maximum de 540° est permis sur les rotations alternées à 45° montant");

rules.push("rule-VUP4S = upstop:<5");
rules.push("why-VUP4S  = a maximum of 4 stops are allowed on vertical up opposite rolls");
rules.push("why_fr-VUP4S  = un maximum de 4 arrets est permis sur les rotations alternées verticales montantes");

rules.push("rule-DIAGUP4S = diagupstop:<5");
rules.push("why-DIAGUP4S  = a maximum of 4 stops (3 if snap) are allowed on diagonal up opposite rolls");
rules.push("why_fr-DIAGUP4S  = un maximum de 4 arrets (3 si déclenché) est permis sur les rotations combinées à 45° montant");

//note +<6 indicates the total count is less than 6 ... all climbing rolls combined
rules.push("rule-CLIMB450 = climbqtrs:+<6");
rules.push("why-CLIMB450  = a maximum of 450 degrees are allowed on climbing rolls");
rules.push("why_fr-CLIMB450  = un maximum de 450° est permis sur l\'ensemble des rotations montantes");

rules.push("rule-CLIMB4S = climbstop:+<5");
rules.push("why-CLIMB4S  = a maximum of 4 stops are allowed on climbing rolls");
rules.push("why_fr-CLIMB4S  =un maximum de 4 arrets est permis sur l\'ensemble des rotations montantes");

rules.push("rule-VDOWN360 = downqtrs:<5");
rules.push("why-VDOWN360  = a maximum of 360 degrees are allowed on vertical down opposite rolls");
rules.push("why_fr-VDOWN360  = un maximum de 360° est permis sur les rotations alternées verticales descendantes");

rules.push("rule-VDOWN3S = downstop:<4");
rules.push("why-VDOWN3S  = a maximum of 3 stops are allowed on vertical down opposite rolls");
rules.push("why_fr-VDOWN3S  = un maximum de 3 arrets est permis sur les rotations alternées verticales descendantes");

rules.push("conv-vdDhfsz=^9\\.[1248]\\.[15]=v;^9\\.[1248]\\.2=d;^9\\.[1248]\\.4=D; ^9\\.[1248]\\.=h; ^9\\.(9|10)\\.[1-5]=f;^9\\.(9|10)\\.=F; ^9\\.1[12]=s ; ^0\\.=z");
rules.push("rule-UnlimitedNOU  =vdDhfsz: D[,;]|[,;]D|v[,;][fF]|[Ff][,;]v|[Ff][,;]d");
rules.push("why-UnlimitedNOU  = opposite or unlinked roll/roll (or flick) combination is not allowed");
rules.push("why_fr-UnlimitedNOU  = rotations combinées interdites");

rules.push("rule-UnlimitedNOUF  =vdDhfsz: d[,;]F");
rules.push("why-UnlimitedNOUF  = 45-up roll/flick (\"hard way\") combination is not allowed");
rules.push("why_fr-UnlimitedNOUF  = sous 45° montant rotation combinée tonneau/déclenché \"gros K\" interdite");

rules.push("rule-NF3TOPH  =roll: (.[,;].|[248]) [fF]$");
rules.push("why-NF3TOPH  = no flick roll on vertical down line after hesitation in the loop");
rules.push("why_fr-NF3TOPH  = pas de déclenché sur la verticale descendante aprés des facettes dans la boucle");

rules.push("rule-NF2UP360 = upqtrs: ^([5-8]|[,;]4|4[,;]|2[,;]3|3[,;][23]) f");
rules.push("why-NF2UP360  = no flick roll on loop top after more than 360 roll going up");
rules.push("why_fr-NF2UP360  = pas de déclenché en haut de boucle si plus de 360° de rotation verticale montante");

rules.push("rule-NF2UP2STOP = upstop: ^([3-9]|[,;]2|2[,;]) f");
rules.push("why-NF2UP2STOP  = no flick roll on loop top after more than 2 stops going up");
rules.push("why_fr-NF2UP2STOP  = pas de déclenché en haut de boucle si plus de 2 arrets en verticale montante");

rules.push("rule-N88 = roll: 8");
rules.push("why-N88     = 8 point roll is not allowed");
rules.push("why_fr-N88     = 8 facettes interdit");

rules.push("rule-NORF   = roll: [1248][,;]f");
rules.push("why-NORF    = roll,flick combination not allowed");
rules.push("why_fr-NORF    = combinaison tonneau,déclenché interdite");


rules.push("allow-defrules=UnlimitedNOU ; UnlimitedNOUF; VUP450; VUP4S ; VDOWN360 ; VDOWN3S ;DIAGUP540 ; DIAGUP4S ; Hor10stop");

// ~%~  ~i?d%~ ~i?v%~
//1.1.1-4  #2009 only as linking figures
rules.push("1.1.2.1");
rules.push("1.1.2.2 NORF");
rules.push("1.1.2.3-4");
rules.push("1.1.3.1");
rules.push("1.1.3.2 NORF");
rules.push("1.1.3.3-4");
rules.push("1.1.6.1-4");
rules.push("1.1.7.1-4");

// z_- z^ -iz_ -iz^-

rules.push("1.1.10.1 NORF");
rules.push("1.1.10.4");
rules.push("1.1.11.1 NORF");
rules.push("1.1.11.4");

// ~%i?t%~  ~%i?k%~

rules.push("1.2.1.1");
rules.push("1.2.1.2 NORF:1");
rules.push("1.2.1.3-4");

rules.push("1.2.2.1");
rules.push("1.2.2.2 NORF:1");
rules.push("1.2.2.3-4");

rules.push("1.2.3.1");
rules.push("1.2.3.2 NORF:1");
rules.push("1.2.3.3-4");

rules.push("1.2.4.1");
rules.push("1.2.4.2 NORF:1");
rules.push("1.2.4.3-4");

rules.push("1.2.5.1-2");
rules.push("1.2.5.3 NORF:2");
rules.push("1.2.5.4");

rules.push("1.2.6.1-2");
rules.push("1.2.6.3");
rules.push("1.2.6.4 NORF:2");

rules.push("1.2.7.1-2");
rules.push("1.2.7.3 NORF:2");
rules.push("1.2.7.4");

rules.push("1.2.8.1-2");
rules.push("1.2.8.3");
rules.push("1.2.8.4 NORF:2");

rules.push("2.1.3.1-4");
rules.push("2.2.2.1-4");

rules.push("2.2.5.1-4");
rules.push("2.4.3.1-4");
rules.push("2.3.4.1-4");
rules.push("2.4.5.1-4");
rules.push("2.4.7.1-4");
rules.push("2.2.6.1-4");
rules.push("2.4.4.1-4");
rules.push("2.3.5.1-4");
rules.push("2.4.6.1-4");
rules.push("2.4.8.1-4");

rules.push("2.2.3.1-4");
rules.push("2.3.2.1-4");
rules.push("2.2.4.1-4");
rules.push("2.3.3.1-4");

rules.push("5.2.1.1-4");
rules.push("5.3.1.1-4  NF:1 ; NF:2 ; CLIMB4S ; CLIMB450");
rules.push("5.3.2.1-4  NF:1 ; NF:2 ; CLIMB4S ; CLIMB450");
rules.push("6.2.1.1-4  NF:1");
rules.push("6.2.2.1-4  NF:1");

//half loops

rules.push("7.2.1.1-2  NF:1");
rules.push("7.2.2.1-2  NF:1");
rules.push("7.2.3.1-2  NF:1");
rules.push("7.2.4.1-2  NF:1");


rules.push("7.2.1.3-4  NF:2");
rules.push("7.2.2.3-4  NF:2");
rules.push("7.2.3.3-4  NF:2");
rules.push("7.2.4.3-4  NF:2");

//loops
rules.push("7.4.1.1-2 NOU:1");
rules.push("7.4.1.3-4 NOU:1 ; NF:1 ; N88");
rules.push("7.4.2.1-2 NOU:1");
rules.push("7.4.3.1-2");
rules.push("7.4.3.3-4 NF:1");
rules.push("7.4.4.1-2");
rules.push("7.4.4.3-4 NF:1");

rules.push("7.4.5.1  NF:1");
rules.push("7.4.5.4  NF:2");//doc say "no flick roll on any lower lines of figure" which means what?!
rules.push("7.4.6.1");

//goldfish
// ~%i?g%~
rules.push("7.3.1.1 NORF:2");
rules.push("7.3.1.2 NORF:1");
rules.push("7.3.1.3-4");

rules.push("7.3.2.1");
rules.push("7.3.2.2 NORF");
rules.push("7.3.2.3-4");

rules.push("7.3.3.1 NORF:2");
rules.push("7.3.3.2 NORF:1");
rules.push("7.3.3.3-4");

rules.push("7.3.4.1");
rules.push("7.3.4.2 NORF");
rules.push("7.3.4.3-4");

//cc
// ~%i?cc%~
rules.push("7.8.1.1-2 NF:1");
rules.push("7.8.2.1-2 NF:1");
rules.push("7.8.3.1-2 NF:1");
rules.push("7.8.4.1-2 NF:1");

rules.push("7.8.1.3 NORF:2");
rules.push("7.8.1.4 NORF:3");
rules.push("7.8.2.3 NORF:2");
rules.push("7.8.2.4 NORF:3");
rules.push("7.8.3.3 NORF");
rules.push("7.8.3.4");
rules.push("7.8.4.3 NORF");
rules.push("7.8.4.4");

//rcc
rules.push("7.8.5.1 NF:3 ; NORF:2");
rules.push("7.8.5.2 NF:3 ; NORF:1");
rules.push("7.8.6.1 NF:3 ; NORF:2");
rules.push("7.8.6.2 NF:3 ; NORF:1");
rules.push("7.8.7.1 NF:3");
rules.push("7.8.7.2 NF:3 ; NORF");
rules.push("7.8.8.1 NF:3");
rules.push("7.8.8.2 NF:3 ; NORF");

rules.push("7.8.5.3-4");
rules.push("7.8.6.3-4");
rules.push("7.8.7.3-4");
rules.push("7.8.8.3-4");


//bumps
// ~%i?p?b%~
rules.push("8.4.1.1-4");
rules.push("8.4.2.1-4");
rules.push("8.4.3.1-4");
rules.push("8.4.4.1-4");

// %db%~   ~%rdb%~  ~%irdb%~
rules.push("8.4.13.1");
rules.push("8.4.14.1");

rules.push("8.4.15.1");
rules.push("8.4.15.2-4 NORF");

rules.push("8.4.16.1");
rules.push("8.4.16.2-4 NORF");

rules.push("8.4.17.1");
rules.push("8.4.17.2-4 NORF");
rules.push("8.4.18.1");
rules.push("8.4.18.2-4 NORF");

//rc
// ~%i?c%~  ~%i?rc%~ ~%i?rp%~
rules.push("8.5.1.1  NF:2");
rules.push("8.5.1.2  NF:2 ; NORF");
rules.push("8.5.2.1  NF:2");
rules.push("8.5.2.2  NF:2 ; NORF");

rules.push("8.5.3.1  NF:2");
rules.push("8.5.3.2  NF:2 ; NORF");
rules.push("8.5.4.1  NF:2");
rules.push("8.5.4.2  NF:2 ; NORF");
rules.push("8.5.1.3-4");
rules.push("8.5.2.3-4");
rules.push("8.5.3.3-4");
rules.push("8.5.4.3-4");

//rp
rules.push("8.6.1.1-2  NOU:2; NF:3; NF2UP360; NF2UP2STOP");
rules.push("8.6.3.1-2  NOU:2; NF:3; NF2UP360; NF2UP2STOP");
rules.push("8.6.2.1-2  NOU:2; NF:3; NF2UP360; NF2UP2STOP");
rules.push("8.6.4.1-2  NOU:2; NF:3; NF2UP360; NF2UP2STOP");

rules.push("8.6.1.3-4");
rules.push("8.6.3.3-4");
rules.push("8.6.2.3-4");
rules.push("8.6.4.3-4");

//c
rules.push("8.5.5.1-2  NF:1");
rules.push("8.5.6.1-2  NF:1");
rules.push("8.5.7.1-2  NF:1");
rules.push("8.5.8.1-2  NF:1");
rules.push("8.5.5.3   NORF:2");
rules.push("8.5.5.4");
rules.push("8.5.6.3   NORF:2");
rules.push("8.5.6.4");
rules.push("8.5.7.3");
rules.push("8.5.7.4   NORF:2");
rules.push("8.5.8.3");
rules.push("8.5.8.4    NORF:2");

//p
rules.push("8.6.5.1-2  NOU:2 ; NF:1 ; NF3TOPH");
rules.push("8.6.6.1-2  NOU:2 ; NF:1 ; NF3TOPH");
rules.push("8.6.7.1-2  NOU:2 ; NF:1 ; NF3TOPH");
rules.push("8.6.8.1-2  NOU:2 ; NF:1 ; NF3TOPH");
rules.push("8.6.5.3-4");
rules.push("8.6.6.3-4");
rules.push("8.6.7.3-4");
rules.push("8.6.8.3-4");

// double bumps
rules.push("8.8.1.1 NOU");
rules.push("8.8.1.4 NOU");
rules.push("8.8.2.1 NOU");
rules.push("8.8.5.1 NOU");
rules.push("8.8.6.1 NOU");
rules.push("8.8.7.2 NOU");
rules.push("8.8.8.2 NOU");
rules.push("8.8.6.3 NOU");
rules.push("8.8.7.3 NOU");
rules.push("8.8.8.3 NOU");

// ROLLS
// v[42315] d[216] [42316]   id[216] iv[4231]
rules.push("9.1.1.1-5");
rules.push("9.1.2.1-6");
rules.push("9.1.3.1-8");
rules.push("9.1.4.2");
rules.push("9.1.4.4");
rules.push("9.1.4.6");
rules.push("9.1.5.1-4");

// v22 d22 [23]2   id22 iv22

rules.push("9.2.1.4");
rules.push("9.2.2.4");
rules.push("9.2.2.6");
rules.push("9.2.3.4");
rules.push("9.2.3.6");
rules.push("9.2.3.8");
rules.push("9.2.4.4");
rules.push("9.2.5.4");

// v[234]4  d[24]4 [234]4 id[24]4 iv[23]4

rules.push("9.4.1.2-4");
rules.push("9.4.2.2-4");
rules.push("9.4.3.2-4");
rules.push("9.4.4.2");
rules.push("9.4.4.4");
rules.push("9.4.5.2-3");

// v4?8  d48 [48]8  id48 iv4?8

rules.push("9.8.1.1-2");
rules.push("9.8.2.1-2");
rules.push("9.8.3.1-2");
rules.push("9.8.3.4");
rules.push("9.8.4.2");
rules.push("9.8.5.1-2");

//snaps & spins
// ~v[231]f   ~d[21]f  ~[21]f  ~id[21]f  ~iv[231]f  6f id6f
// ~v[231]if  ~d[21]if ~[21]if ~id[21]if ~iv[231]if  -6if
rules.push("9.9.1.2-4");
rules.push("9.9.2.2");
rules.push("9.9.2.4");
rules.push("9.9.3.2");
rules.push("9.9.3.4");
rules.push("9.9.3.6");
rules.push("9.9.4.2");
rules.push("9.9.4.4");
rules.push("9.9.4.6");
rules.push("9.9.5.2-4");
rules.push("9.9.6.2-4");
rules.push("9.9.7.2");
rules.push("9.9.7.4");
rules.push("9.9.8.2");
rules.push("9.9.8.4");
rules.push("9.9.9.2");
rules.push("9.9.9.4");
rules.push("9.9.10.2-4");

rules.push("9.10.1.2-4");
rules.push("9.10.2.2");
rules.push("9.10.2.4");
rules.push("9.10.3.2");
rules.push("9.10.3.4");
rules.push("9.10.3.6");
rules.push("9.10.4.2");
rules.push("9.10.4.4");
rules.push("9.10.5.2-4");
rules.push("9.10.6.2-4");
rules.push("9.10.7.2");
rules.push("9.10.7.4");
rules.push("9.10.8.2");
rules.push("9.10.8.4");
rules.push("9.10.9.2");
rules.push("9.10.9.4");
rules.push("9.10.10.2-4");

// [156]i?s

rules.push("9.11.1.4-6");
rules.push("9.12.1.4-6");

// what info should be filled out
rules.push("infocheck=positioning");

//#######################################################################################
//#
//# Define Advanced programmes.
 
//######################################################################################
//##### NZAC ADVANCED FREE KNOWN #######################################################
//######################################################################################

rules.push("[NZAC Advanced Free Known]");
rules.push("posnl=30");//no line judges
rules.push("poslj=10");
rules.push("k-max=320");
rules.push("basefig-min=10");
rules.push("basefig-max=10");

rules.push("basefig-repeat=1");
rules.push("roll-repeat=1");
rules.push("snap-repeat=1");
rules.push("spin-repeat=1");

rules.push("group-roller=^2\\.(1\\.[23]|2\\.[2-6]|3\\.[2-5]|4\\.[2-8])");
rules.push("roller-name=Rolling turn, family 2.1.2 to 2.1.3, 2.2.2 to 2.2.7, 2.3.2 to 2.3.6, 2.4.2 to 2.4.8");
rules.push("roller-name_fr=Tonneaux en virage, famille 2.1.2, 2.1.3, 2.2.2 à 2.2.7, 2.3.2 à 2.3.6, 2.4.2 à 2.4.8");

rules.push("roller-min=1");
rules.push("fam1-min=1");
rules.push("fam5-min=1");
rules.push("fam7-min=1");
rules.push("fam8-min=1");

rules.push("froll-min=1");
rules.push("hroll-min=1");
rules.push("qroll-min=1");
rules.push("eroll-min=1");
rules.push("snap-min=2");
rules.push("spin-min=1");

rules.push("opposite-min=1");//one opposite roll is required!

// rules.push("allow=^[1-9]");//all figures are allowed for the Free Programme

rules.push("figure-letters=ABCDE");

rules.push('reference="@A" -4,3m,6;f "@B" frdb24 "@C" 2dh(8)24 "@D" ````6s..ik4,34- "@E" -2j15');

// what info should be filled out
rules.push("infocheck=pilot;actype;acreg;positioning");

//######################################################################################
//##### NZAC ADVANCED UNKNOWN ##########################################################
//######################################################################################

rules.push("[NZAC Advanced Free Unknown]");
rules.push("k-maxperfig=30");
rules.push("k-maxperfig-rule=Sporting Code Section 6 Part I, 2.3.1.1");
rules.push("more=NZAC Advanced Unknownall");

rules.push("(NZAC Advanced Unknownall)");
rules.push("poslj=10");
rules.push("posnl=30");

// general rules for Advanced: 11-14 figures,
// limit on figure types (max1 spin etc)
// limit on snaps (2-4 total), (one max per figure)
// figures 11-14. Kfactor 15-40.

// at most one of 1.2.3-4.3-4 and one of 7.8.1-8.*

rules.push("group-one=^1\\.2\\.[34]\.[34]");
rules.push("group-two=^7\\.8\\.[1-8]");

rules.push("k-minperfig=15");

rules.push("snap-maxperfig=1");
rules.push("snap-maxperfig-rule=Sporting Code Section 6 Part I, 2.3.1.4 b)");
rules.push("snap-min=2");
rules.push("snap-max=4");

rules.push("spin-max=1");

//one-name=family 1.14-15 columns 3&4 (inv tooth)
//one-max=1

//two-name=family 7.23-30 (full cubans)
//two-max=1

rules.push("one-name=family 1.2.3-4 columns 3&4 (inv tooth)");
rules.push("one-name_fr=famille 1.2.3-4 colonnes 3 et 4 (triangle inversé)");
rules.push("one-max=1");

rules.push("two-name=family 7.8.1-8 (full cubans)");
rules.push("two-name_fr=famille 7.8.1-8 (noeuds de savoie)");
rules.push("two-max=1");

rules.push("basefig-min=10");
rules.push("basefig-min-rule=Sporting Code Section 6 Part I, 2.3.1.4");
rules.push("basefig-max=10");
rules.push("basefig-max-rule=Sporting Code Section 6 Part I, 2.3.1.4");

rules.push("basefig-repeat=1");
rules.push("roll-repeat=1");
rules.push("snap-repeat=1");
rules.push("spin-repeat=1");

rules.push("additionals=4/24");
rules.push("figure-letters=ABCDEFGHIJ");

rules.push("more=NZAC Advanced Unknownbase");
rules.push("(NZAC Advanced Unknownbase)");

//############################################################
// extended conv rule version with limited vertical rolls=v(up) =n(down)
// limited vertical rolls are 3/4 & 2/4 up(v =can't flyoff) or down(n=cant push out)
// for Advanced Unknowns only, of course.

rules.push("conv-horstop=^9\\.(1|9|10)\\.[38]=1 ; ^9\\.2\\.3\\.4 = 2 ;^9\\.2\\.3\\.6 = 3 ;^9\\.2\\.3\\.8 = 4 ;^9\\.4\\.3\\.([1-8]) = $1; ^9\\.8\\.3\\.1 = 2;^9\\.8\\.3\\.2 = 4;^9\\.8\\.3\\.3 = 6;^9\\.8\\.3\\.4 = 8; ^9\\.=r ; ^0\\.=z");
rules.push("rule-Hor10stop = horstop:<11");
rules.push("why-Hor10stop  = a maximum of 10 stops are allowed on straight horizontal lines rolls");
rules.push("why_fr-Hor10stop  = un maximum de 10 arrets est autorisé dans les rotations sur les lignes droites horizontales");

rules.push("conv-adv=^9\\.(1\\.1\\.3|4\\.1\\.2)=v ; ^9\\.(1\\.5\\.3|4\\.5\\.2)=n; ^9\\.[1248]\\.=r; ^9\\.(9|10)=f; ^9\\.1[12]=s ; ^0\\.=z");

rules.push("rule-NRLevFly   =adv:v$");
rules.push("rule-NRPushout  =adv:n$");
rules.push("why-NRLevFly    = level fly off is not allowed after this roll");
rules.push("why_fr-NRLevFly    = rotation interdite avant une mise en palier");
rules.push("why-NRPushout   = negative recovery is not allowed after this roll");
rules.push("why_fr-NRPushout   = sortie dos interdite après cette rotation");


//For Adv rp figures, we convert 3/4 up to 'x' which isnt allowed
rules.push("conv-upqtrs=^9\\.([1-9]|10)\\.[16]\\.([1-8]) = $2 ; ^9\\.(9|10)\\. = f ; ^9\\. = r ; ^0\\.=z");
rules.push("rule-Max180up =upqtrs:<3");
rules.push("why-Max180up  =no more than 1/2 roll is allowed");
rules.push("why_fr-Max180up  =1/2 rotation maximum autorisée");

rules.push("rule-NH2F3 =roll:^[\\w,;]+ [1248] (f|\\w[,;]f)");
rules.push("why-NH2F3 = no flick allowed in third position when 2nd position has a roll");
rules.push("why_fr-NH2F3 = déclenché interdit en 3eme rotation si la 2eme rotation est présente");

//for Adv dh figures, we check for 9.4.2.2 or 9.2.1.2 on 45 and 9.1.1.1 on vert
rules.push("conv-advdh45=^9\\.(4\\.2\\.2)=v ;  ^9\\.(1\\.2\\.2)=v ; ^9\\.=x; ^0\\.=z");
rules.push("rule-DH45M = advdh45: ^x");
rules.push("why-DH45M = max of 9.4.2.2 or 9.1.2.2 allowed on 45° up");
rules.push("why_fr-DH45M = maximun 9.4.2.2 ou 9.1.2.2 autorisé en 45° montant");
rules.push("DH45M-rule=Sporting Code Section 6 Part I, A.8.1.2");

rules.push("conv-advdhv= ^9\\.(1\\.1\\.1)=v ; ^9\\.=x; ^0\\.=z");
rules.push("rule-DHVM = advdhv: ^. x");
rules.push("why-DHVM = max of 9.1.1.1 allowed on vertical up");
rules.push("why_fr-DHVM = maximun 9.1.1.1 autorisé en verticale montante");

rules.push("allow-defrules= Hor10stop");

rules.push("1.1.1.1-4");
rules.push("1.1.2.1-4 NOU");
rules.push("1.1.3.1-4 NOU");
rules.push("1.1.6.1-3 NOU ; NRLevFly");
rules.push("1.1.6.4   NOU ; NRPushout");
rules.push("1.1.7.1-2 NOU ; NRLevFly");
rules.push("1.1.7.3   NOU ; NRPushout");
rules.push("1.1.7.4   NOU");

rules.push("1.2.1.1 NOU");
rules.push("1.2.1.3 NOU ; NRLevFly");
rules.push("1.2.2.3 NOU ; NRLevFly");
rules.push("1.2.3.1 NOU ; NRLevFly");
rules.push("1.2.3.3-4 NOU ; NRLevFly");
rules.push("1.2.4.2-4 NOU ; NRLevFly");
rules.push("1.2.5.1 NOU");
rules.push("1.2.5.4 NOU");
rules.push("1.2.6.1 NOU");
rules.push("1.2.6.3 NOU");
rules.push("1.2.7.1 NOU");
rules.push("1.2.7.4 NOU");
rules.push("1.2.8.1 NOU");
rules.push("1.2.8.3 NOU");

rules.push("2.1.3.2-4");
rules.push("2.2.3.1-4");
rules.push("2.2.5.1-4");
rules.push("2.3.4.1-4");
rules.push("2.4.5.1-2");
rules.push("2.4.7.1-2");

rules.push("5.2.1.1 NOU");
rules.push("5.3.1.1-4  NOU ; NF:1 ; NF:2 ; DHVM ; DH45M");
rules.push("5.3.2.1-4  NOU ; NF:1 ; NF:2 ; DHVM ; DH45M");

rules.push("5.2.1.2-3 NOU ; NRPushout");
rules.push("5.2.1.4 NOU");

// tailslides
rules.push("6.2.1.1 NR");
rules.push("6.2.2.1 NR");

// half loops
rules.push("7.2.1.1-2  NF:1");
rules.push("7.2.2.1-2  NF:1");
rules.push("7.2.3.1-2  NF:1");
rules.push("7.2.4.1-2  NF:1");

rules.push("7.2.1.3-4  NF:2");
rules.push("7.2.2.3-4  NF:2");
rules.push("7.2.3.3-4  NF:2");
rules.push("7.2.4.3-4  NF:2");

//goldfish
rules.push("7.3.1.2-3 NOU");
rules.push("7.3.2.1   NOU");
rules.push("7.3.2.3-4 NOU");
rules.push("7.3.3.3   NOU");
rules.push("7.3.4.1   NOU");
rules.push("7.3.4.4   NOU");

//loops
rules.push("7.4.1.1 NOU ; MAX360");
rules.push("7.4.1.2 NOU ; MAX360 ; FAM91:1");
rules.push("7.4.2.1-2 NOU");
rules.push("7.4.3.1-2 NOU");
rules.push("7.4.5.1 NR:1 ; NR:2");
rules.push("7.4.6.1");

//cc
rules.push("7.8.1.1-2 NOU ; NF:1");
rules.push("7.8.1.3-4 NOU");

rules.push("7.8.2.1-2 NOU ; NF:1");
rules.push("7.8.2.3-4 NOU");
rules.push("7.8.3.1   NOU ; NF:1");
rules.push("7.8.3.4   NOU");
rules.push("7.8.4.1   NOU ; NF:1");
rules.push("7.8.4.4   NOU");

rules.push("7.8.5.1-2   NOU ; NF:3");
rules.push("7.8.5.3-4   NOU");
rules.push("7.8.6.2   NOU ; NF:3");
rules.push("7.8.6.3   NOU");
rules.push("7.8.7.1-2   NOU ; NF:3");
rules.push("7.8.7.3-4   NOU");
rules.push("7.8.8.1   NOU ; NF:3");
rules.push("7.8.8.4   NOU");

//bumps
rules.push("8.4.1.1 NOU");
rules.push("8.4.1.2 NOU ; NRPushout");
rules.push("8.4.2.1 NOU ; NRPushout");
rules.push("8.4.2.2 NOU");
rules.push("8.4.3.1 NOU");
rules.push("8.4.3.2 NOU ; NRPushout");
rules.push("8.4.4.1 NOU ; NRPushout");
rules.push("8.4.4.2 NOU");

rules.push("8.4.13.1 NOU ;NF:1 ; NF:2");
rules.push("8.4.14.1 NOU; NF:1 ; NF:2");
rules.push("8.4.15.1-2 NOU ; NF:2");
rules.push("8.4.16.1-2 NOU ; NF:2");
rules.push("8.4.18.1-2 NOU ; NF:2");

//rc
rules.push("8.5.1.1-2 NOU:1; NF:2");
rules.push("8.5.2.1-2 NOU:1; NF:2");
rules.push("8.5.1.3 NOU:1");
rules.push("8.5.1.4 NOU:1 ; FAM91:1");
rules.push("8.5.2.3-4 NOU:1");

rules.push("8.5.3.1-2 NOU:1; NF:2");
rules.push("8.5.3.3 NOU:1");
rules.push("8.5.3.4 NOU:1 ; FAM91:1");
rules.push("8.5.4.1-2 NOU:1; NF:2");
rules.push("8.5.4.3-4 NOU:1");

//rp
rules.push("8.6.1.1 NOU:1 ; Max180up:1 ;NR:2 ;NF:3");
// Changed in 1.4.3
rules.push("8.6.1.4 NOU:1");
rules.push("8.6.3.1 NOU:1 ; Max180up:1 ;NR:2 ;NF:3");
rules.push("8.6.3.2 NR:1   ;NR:2 ;NF:3");
// Changed in 1.4.3
rules.push("8.6.3.3 NOU:1");

rules.push("8.6.2.1 NOU:1 ; Max180up:1 ;NR:2 ;NF:3");
rules.push("8.6.2.4 NOU:1");
rules.push("8.6.4.1 NOU:1 ; Max180up:1 ;NR:2 ;NF:3");
rules.push("8.6.4.2 NR:1 ; NR:2 ; NF:3");
rules.push("8.6.4.3 NOU:1");

//c
rules.push("8.5.5.1-2 NF:1 ; NOU:2");
rules.push("8.5.6.1-2 NF:1 ; NOU:2");
rules.push("8.5.5.4 NOU:2");
rules.push("8.5.6.4 NOU:2");
rules.push("8.5.7.1-2 NF:1 ; NOU:2");
rules.push("8.5.8.1-2 NF:1 ; NOU:2");
rules.push("8.5.7.3 NOU:2");
rules.push("8.5.8.3 NOU:2");

//p
rules.push("8.6.5.1 NOU:2; NOU:3; NF:1 ;NH2F3 ; MAX360:2");
rules.push("8.6.6.1 NOU:2; NOU:3; NF:1 ;NH2F3 ; MAX360:2 ; NRPushout");
rules.push("8.6.6.2 NOU:2; NOU:3; NF:1 ;NH2F3 ; MAX360:2");

rules.push("8.6.7.2 NOU:2; NOU:3; NF:1 ;NH2F3 ; MAX360:2");
rules.push("8.6.8.1 NOU:2; NOU:3; NF:1 ;NH2F3 ; MAX360:2");
rules.push("8.6.8.2 NOU:2; NOU:3; NF:1 ;NH2F3 ; MAX360:2 ; NRPushout");

// double bumps
rules.push("8.8.1.1 NOU");
rules.push("8.8.2.1 NOU");
rules.push("8.8.5.1 NOU");
rules.push("8.8.6.1 NOU");
rules.push("8.8.7.2 NOU");
rules.push("8.8.8.2 NOU");

// ROLLS
rules.push("9.1.1.1-2");
rules.push("9.1.1.3");//9.1.1.3 (3/4 up) may not be followed by fly-off
rules.push("9.1.2.2");
rules.push("9.1.2.4");
rules.push("9.1.3.1-4");
rules.push("9.1.3.6");
rules.push("9.1.3.8");
rules.push("9.1.4.2");
rules.push("9.1.4.4");
rules.push("9.1.5.1-2");
rules.push("9.1.5.3");//9.1.5.3 (3/4 down) may not be followed by negative

rules.push("9.2.2.4");
rules.push("9.2.3.4");
rules.push("9.2.3.6");
rules.push("9.2.3.8");
rules.push("9.2.4.4");

rules.push("9.4.1.2");// may not be followed by level fly-off
rules.push("9.4.2.2");
rules.push("9.4.2.4");
rules.push("9.4.3.2-4");
rules.push("9.4.4.2");
rules.push("9.4.5.2");// may not be followed by negative recovery

rules.push("9.8.1.1");
rules.push("9.8.2.2");
rules.push("9.8.3.1");
rules.push("9.8.3.2");
rules.push("9.8.3.4");
rules.push("9.8.5.1");

//snaps & spins
rules.push("9.9.2.2");
rules.push("9.9.2.4");
rules.push("9.9.3.2");
rules.push("9.9.3.4");
rules.push("9.9.3.6");
rules.push("9.9.4.2");
rules.push("9.9.4.4");
rules.push("9.9.5.2-3");
rules.push("9.9.10.2");

rules.push("9.11.1.4-6");
rules.push("9.12.1.4-6");

// what info should be filled out
rules.push("infocheck=positioning");

//#######################################################################################
//#
//# Define Intermediate & Yak52 programmes.

//######################################################################################
//##### NZAC YAK52 FREE KNOWN ##########################################################
//######################################################################################

rules.push("(NZAC Yak52 Free Known)");
rules.push("posnl=20");//no line judges
rules.push("poslj=10");
rules.push("k-max=200");
rules.push("basefig-min=10");
rules.push("basefig-max=10");

rules.push("basefig-repeat=1");
rules.push("roll-repeat=1");
rules.push("snap-repeat=1");
rules.push("spin-repeat=1");

rules.push("fam5-min=1");
rules.push("fam7-min=1");
rules.push("fam8-min=1");
rules.push("froll-min=1");
rules.push("hroll-min=1");
rules.push("qroll-min=1");
rules.push("eroll-min=1");
rules.push("snap-min=1");
rules.push("spin-min=1");

rules.push("group-roller=^2\\.(1\\.[23]|2\\.[2-7]|3\\.[2-6]|4\\.[2-8])");
rules.push("roller-name=Rolling turn, family 2.1.2 to 2.1.3, 2.2.2 to 2.2.7, 2.3.2 to 2.3.6, 2.4.2 to 2.4.8");
rules.push("roller-name_fr=Tonneaux en virage, famille 2.1.2, 2.1.3, 2.2.2 à 2.2.7, 2.3.2 à 2.3.6, 2.4.2 à 2.4.8");
rules.push("roller-min=1");

rules.push("emptyline-max=0");

rules.push("opposite-min=1"); //one opposite roll is required!

// rules.push("allow=^[1-9]"); //all figures are allowed for the Free Programme

rules.push("figure-letters=ABCDE");

rules.push('reference="@A" 4b "@B" 8h2 "@C" ````24.\'g "@D" ```s\'irp4,3 "@E" -1jo1-');

// what info should be filled out
rules.push("infocheck=pilot;actype;acreg;positioning");

//######################################################################################
//##### NZAC INTERMEDIATE FREE KNOWN ###################################################
//######################################################################################

rules.push("[NZAC Intermediate Free Known]");
rules.push("more=NZAC Yak52 Free Known");

/**********************************************************************
 *           Advanced, Yak52 and Intermediate Super Families          *
 **********************************************************************/

rules.push("(NZAC AdvYakInt SF)");
rules.push("sf=^9\\.11\\.:3;^9\\.12\\.:3;^9\\.9\\.:4;^9\\.10\\.:4;^2\\.:2;^5\\.:5;^6\\.:6;^1\\.:7;^3\\.:7;^7\\.:7;^8\\.:7;^0\\.:7");

//######################################################################################
//##### NZAC YAK52 UNKNOWN #############################################################
//######################################################################################

rules.push("(NZAC Yak52 Unknown1)");
rules.push("k-maxperfig=20");
rules.push("more=NZAC Yak52 Unknownall");

//#######################################################################################
rules.push("(NZAC Yak52 Unknownall)");
//#######################################################################################

rules.push("k-minperfig=12");

rules.push("poslj=10");
rules.push("posnl=20");

// general rules for AWAC: 10-14 figures,
// limit on figure types (max1 spin etc)
// limit on snaps (2-4 total), (one max per figure)
// figures 10-14. Kfactor 15-35.
// at most one of 1.2.3-4.3-4 and one of 7.8.1-8.*

rules.push("group-one=^1\\.2\\.[34]\\.[34]");
rules.push("group-two=^7\\.8\\.[1-8]");

rules.push("snap-maxperfig=1");
rules.push("snap-min=1");
rules.push("snap-max=2");

rules.push("spin-max=1");

//one-name=family 1.14-15 columns 3&4 (inv tooth)
//one-max=1

//two-name=family 7.23-30 (full cubans)
//two-max=1

rules.push("one-name=family 1.2.3-4 columns 3&4 (inv tooth)");
rules.push("one-name_fr=famille 1.2.3-4 colonnes 3 et 4 (triangle inversé)");
rules.push("one-max=1");

rules.push("two-name=family 7.8.1-8 (full cubans)");
rules.push("two-name_fr=famille 7.8.1-8 (noeuds de savoie)");
rules.push("two-max=1");

rules.push("basefig-min=10");
rules.push("basefig-max=10");

rules.push("basefig-repeat=1");
rules.push("roll-repeat=1");
rules.push("snap-repeat=1");
rules.push("spin-repeat=1");

rules.push("additionals=4/24");
rules.push("figure-letters=ABCDEFGHIJ");

rules.push("more=NZAC Yak52 Unknownbase");
rules.push("(NZAC Yak52 Unknownbase)");

//############################################################
// extended conv rule version with limited vertical rolls=v(up) =n(down)
// limited vertical rolls are 3/4 & 2/4 up(v =can't flyoff) or down(n=cant push out)
// for Yak52 Unknowns only, of course.

rules.push("conv-horstop=^9\\.(1|9|10)\\.[38]=1 ; ^9\\.2\\.3\\.4 = 2 ;^9\\.2\\.3\\.6 = 3 ;^9\\.2\\.3\\.8 = 4 ;^9\\.4\\.3\\.([1-8]) = $1; ^9\\.8\\.3\\.1 = 2;^9\\.8\\.3\\.2 = 4;^9\\.8\\.3\\.3 = 6;^9\\.8\\.3\\.4 = 8; ^9\\.=r ; ^0\\.=z");
rules.push("rule-Hor10stop = horstop:<11");
rules.push("why-Hor10stop  = a maximum of 10 stops are allowed on straight horizontal lines rolls");
rules.push("why_fr-Hor10stop  = un maximum de 10 arrets est autorisé dans les rotations sur les lignes droites horizontales");

rules.push("conv-adv=^9\\.(1\\.1\\.3|4\\.1\\.2)=v ; ^9\\.(1\\.5\\.3|4\\.5\\.2)=n; ^9\\.[1248]\\.=r; ^9\\.(9|10)=f; ^9\\.1[12]=s ; ^0\\.=z");

rules.push("rule-NRLevFly   =adv:v$");
rules.push("rule-NRPushout  =adv:n$");
rules.push("why-NRLevFly    = level fly off is not allowed after this roll");
rules.push("why_fr-NRLevFly    = rotation interdite avant une mise en palier");
rules.push("why-NRPushout   = negative recovery is not allowed after this roll");
rules.push("why_fr-NRPushout   = sortie dos interdite après cette rotation");

//For Adv rp figures, we convert 3/4 up to 'x' which isnt allowed
rules.push("conv-upqtrs=^9\\.([1-9]|10)\\.[16]\\.([1-8]) = $2 ; ^9\\.(9|10)\\. = f ; ^9\\. = r ; ^0\\.=z");
rules.push("rule-Max180up =upqtrs:<3");
rules.push("why-Max180up  =no more than 1/2 roll is allowed");
rules.push("why_fr-Max180up  =1/2 rotation maximum autorisée");

rules.push("rule-NH2F3 =roll:^[\\w,;]+ [1248] (f|\\w[,;]f)");
rules.push("why-NH2F3 = no flick allowed in third position when 2nd position has a roll");
rules.push("why_fr-NH2F3 = déclenché interdit en 3eme rotation si la 2eme rotation est présente");

//for Adv dh figures, we check for 9.4.2.2 or 9.2.1.2 on 45 and 9.1.1.1 on vert
rules.push("conv-advdh45=^9\\.(4\\.2\\.2)=v ;  ^9\\.(1\\.2\\.2)=v ; ^9\\.=x; ^0\\.=z");
rules.push("rule-DH45M = advdh45: ^x");
rules.push("why-DH45M = max of 9.4.2.2 or 9.1.2.2 allowed on 45 up");
rules.push("why_fr-DH45M = maximun 9.4.2.2 ou 9.1.2.2 autorisé en 45° montant");

rules.push("conv-advdhv= ^9\\.(1\\.1\\.1)=v ; ^9\\.=x; ^0\\.=z");
rules.push("rule-DHVM = advdhv: ^. x");
rules.push("why-DHVM = max of 9.1.1.1 allowed on vertical up");
rules.push("why_fr-DHVM = maximun 9.1.1.1 autorisé en verticale montante");

rules.push("allow-defrules= Hor10stop");

//conversion rules for checking validity

rules.push("1.1.1.1-4");
rules.push("1.1.2.1 NOU");
rules.push("1.1.3.1 NOU");
rules.push("1.1.3.4 NOU");
rules.push("1.1.6.3 OS:1");

rules.push("1.2.1.1 NOU ; NR:2");
rules.push("1.2.1.3 NOU ; NR:2");
rules.push("1.2.2.3 NOU ; NR:2");
rules.push("1.2.3.1 NOU ; NR:2");
rules.push("1.2.3.4 NOU ; NR:2");
rules.push("1.2.4.4 NOU ; NR:2");
rules.push("1.2.5.4 NOU ; NR:1");
rules.push("1.2.6.1 NOU");
rules.push("1.2.6.3 NOU ; OS:1");
rules.push("1.2.7.1 NOU");
rules.push("1.2.7.4 NOU ; NR:1");
rules.push("1.2.8.3 NOU ; OS:1");

// rolling circle
rules.push("2.1.3.1");

// hammerhead
rules.push("5.2.1.1 NOU");

// half loops
rules.push("7.2.1.1 NF:1");
rules.push("7.2.2.1 NF:1");

rules.push("7.2.1.4 NF:2");
rules.push("7.2.3.3 NF:2");

//goldfish
rules.push("7.3.2.1 NOU");
rules.push("7.3.3.3 NOU");
rules.push("7.3.4.1 NOU");
rules.push("7.3.4.4 NOU");

//loops
rules.push("7.4.1.1 NOU ; MAX360");
rules.push("7.4.3.1 NR");

//bumps
rules.push("8.4.1.1 NOU");
rules.push("8.4.3.1 NOU");

//rc
rules.push("8.5.1.3 NOU:1");
rules.push("8.5.2.1 NOU:1; NF:2");
rules.push("8.5.2.4 NOU:1");

rules.push("8.5.3.3 NOU:1");
rules.push("8.5.4.4 NOU:1");

//c
rules.push("8.5.5.4 NOU:2");
rules.push("8.5.6.1 NF:1 ; NOU:2");
rules.push("8.5.6.4 NOU:2");
rules.push("8.5.7.3 NOU:2");
rules.push("8.5.8.3 NOU:2");

//rp
rules.push("8.6.1.1 NR:1 ; NR:2 ;NF:3");
// Changed in 1.4.3
rules.push("8.6.1.4 NR:1");
rules.push("8.6.2.4 NR:1");
// Changed in 1.4.3
rules.push("8.6.3.3 OS:1");
rules.push("8.6.4.3 OS:1");

// ROLLS
rules.push("9.1.1.1-2");
rules.push("9.1.2.2");
rules.push("9.1.2.4");
rules.push("9.1.3.1-2");
rules.push("9.1.3.4");
rules.push("9.1.3.6");
rules.push("9.1.4.2");
rules.push("9.1.5.1");

rules.push("9.2.2.4");
rules.push("9.2.3.4");
rules.push("9.2.3.6");

rules.push("9.4.2.2");
rules.push("9.4.2.4");
rules.push("9.4.3.2");
rules.push("9.4.3.4");
rules.push("9.4.4.2");

rules.push("9.8.1.1");
rules.push("9.8.2.2");
rules.push("9.8.3.1");
rules.push("9.8.3.2");
rules.push("9.8.5.1");

//snaps & spins
rules.push("9.9.2.2");
rules.push("9.9.3.2");
rules.push("9.9.3.4");

rules.push("9.11.1.4-6");

// what info should be filled out
rules.push("infocheck=positioning");

//######################################################################################
//##### NZAC INTERMEDIATE UNKNOWN ######################################################
//######################################################################################

rules.push("[NZAC Intermediate Free Unknown]");
rules.push("more=NZAC Yak52 Unknown1");
