+++
categories = []
date = 2022-03-08T23:00:00Z
description = "By Robin Renwick (PhD), Aditya Singh (LLM) and Mistale Taylor (PhD)"
draft = true
keywords = ["commons", "decentralised", "Swarm", "data"]
slug = ""
title = "Designing the (data)Hive:  Principles-based decentralised architectures"

+++
# **Introduction**

Decentralised architectures and networks are slowly embedding themselves into the technological and societal landscape, empowered by communities of like-minded people who strive to alter the existing socio-economic order by leveraging peer-to-peer (P2P) technologies that afford disintermediation and radical shifts in how entities maintain trust. Bottom-up initiatives, free from centralised control and command structures, are appearing cross-sectorally - built on the premise, and promise, of distributed ledger technology.

In this article, we discuss one such initiative, Swarm, by drawing relations between its developed set of community-centred, bottom-up Fair Data Principles and the incumbent, top-down, principles-based frameworks that govern today’s existing data-sharing economy, with a focus on data protection.

We also introduce the idea of the commons along with a set of “commons design principles”. We highlight how the Swarm community might simultaneously implement principles flowing from existing data protection frameworks and the commons to guide the development of robust design strategies to manifest the communicated goal of a fair and just data-led society.

# **What is Swarm**

[Swarm](https://www.ethswarm.org/swarm-whitepaper.pdf) is a P2P, decentralised storage and communication infrastructure, compatible with [Ethereum](https://ethereum.org/en/) Virtual Machine (EVM) networks \[1\]. The Swarm mission is to provide the technical platform for a decentralised internet - based on a normative framework that is aligned with the [Fair Data Principles](https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f) and envisioned as a vehicle for a fairer society.

The Swarm ecosystem [describes](https://www.ethswarm.org/The-Book-of-Swarm.pdf) a fair data economy as an “Economy of processing data characterised by fair compensation of all parties involved in its creation or enrichment”. This ideological foundation is viewed as a cornerstone of a better society and the bedrock of how individuals might wrestle back control from the overreach of corporations and government; the platform attempts to shift the control of data processing away from large, centralised entities and into the hands of individuals in a just, fair and equitable manner.

The key to achieving the ideal is detailed in the [Swarm whitepaper](https://www.ethswarm.org/swarm-whitepaper.pdf). The overarching vision is born through the deployment of the technology stack, designed to act as a medium through which the Swarm network optimises network bandwidth and storage resources (hard disk memory). It consists of a P2P network of nodes that communicate according to an agreed distributed consensus mechanism and leveraged by an in-built incentivisation scheme.

The technology stack, in practice, is a series of technologies that act in concert and comprises four distinct layers:

![Fig 1: Swarm technology stack](/uploads/fig1-swarm-tech-stack.PNG "Fig 1: Swarm technology stack")

The technology itself should be viewed as the manifestation of an ideology that lies at the centre of the Swarm project. In order to achieve a fair data economy, a decentralised and permissionless data sharing infrastructure is required that allows participants to engage in data storage, sharing and processing with economic benefit accruing to those who created the data, or are the data rights holders. This approach is a shift away from the economic hegemony of the existing data economy - where large, powerful data collectors, processors and sub-processors extract most of the revenue, with very little benefit accruing to those who generated the data, or own the rights.

Swarm is not the first incarnation of a blockchain-based decentralised storage infrastructure, with notable projects such as [Sia](https://sia.tech/), [Filecoin](https://filecoin.io/), and [Storj](https://www.storj.io/) also deployed onto the market \[2\]. Distributed content storage also has a rich history, developing alongside distributed file systems, such as the open source project [InterPlanetary File System](https://github.com/ipfs/ipfs) (IPFS) \[3\]. What sets Swarm apart is the explicit commitment to a defined set of open data principles along with a commitment to building a fair data economy.

While other systems have their own native tokens as vehicles for data sharing, resource allocation and security, Swarm proposes the BZZ token as the transactory foundation through which entities engage in a “collective information” community - moving the value of data, and associated meta-data, into the hands of the data creators \[4\].

As previously mentioned, Swarm also proposes a set of core principles - viewed as an integral step in realising a shared social contract for the Swarm community. The social contract acts as a normative framework that should guide behaviours and actions in the data economy, essentially a principles-based ideology to which all participants in the network adhere - in theory. In practice, however, it is not as clearly defined.

Swarm’s overarching vision is based on a core set of “meta-values” \[5\]:

• **Inclusivity** - public and permissionless participation.

• **Integrity** - privacy, provable provenance.

• **Incentivisation** - alignment of interest of node and network.

• **Impartiality** - content and value neutrality. 

The Swarm project describes these meta-values as systemic qualities, shared throughout the network. This bottom-up, inclusive ideology is key to understanding the potential impact of their P2P data economy as it shifts emphasis away from authority and hierarchy towards concepts such as collective responsibility, common ideology and principles-based governance.

Principles-based data sharing ideologies have a rich history, originating in a number of data protection frameworks around the world. Applying a principles-based framework to a P2P network is, however, a novel and unique strategy. It could be stated that Swarm is attempting to build a bottom-up data economy, based on emergent, permissionless, and non-hierarchical principles. This contrasts strongly with the top-down approaches that have, more often than not, emerged from centralised regulatory or legislative bodies.

# **Introduction to principles-based data protection frameworks**

The emergence of digital technologies has brought monumental change in how society functions, whether seen through the lens of computation, telecommunications, or the concept of the internet and all its related technologies. Central to most conceptions of modern society is the collection, exchange and storing of digital information or data. Since the 1970s, data protection regulation has been developing globally in an effort to protect data and the privacy of its owners, as well as to provide the structure to ensure the free flow of data for economic purposes.

## **_A top-down approach: international, supranational and national regulation_**

Various top-down regulatory and legal frameworks guide local and global data flows. The US Federal Trade Commission, an independent governmental agency tasked with protecting consumers and maintaining competition, released the [US Fair Information Practices](https://simson.net/ref/2004/csg357/handouts/01_fips.pdf) or FIPs in 1973 (since updated and now called Fair Information Practice Principles). The goal was to outline a set of principles to help maintain informational privacy in an electronic marketplace. The FIPs represented the first attempt by a governmental body to regulate the data market - and laid out a framework to support the functioning of the emerging data economy. Several European states, such as Sweden and Germany, subsequently enacted their own data protection laws.

At a supranational level, the Organisation for Economic Co-operation and Development (OECD) released [Guidelines on the Protection of Privacy and Transborder Flows of Personal Data](http://www.oecd.org/document/18/0,2340,en_2649_34255_1815186_1_1_1_1,00.html) in 1980. This principles-based framework attempted to provide a more internationally-accepted instrument to guide the now established (and rapidly developing) data economy. Almost concurrently, the Council of Europe issued the [Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767) (Convention 108) in 1981.

National constitutional traditions and, eventually, the 1995 EU Data Protection Directive and its 2016 replacement the [EU General Data Protection Regulation](https://eur-lex.europa.eu/eli/reg/2016/679/oj) (GDPR) further regulated personal data flows. The notion of personal data protection became increasingly focused on individuals and framed through a rights-based approach. 

In 2020, the European Commission issued their [proposal for an EU Data Governance Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767), which applies to both personal data and non-personal data. This proposed legislation demonstrates how the European Commission could be becoming more conscious of a commons-/fairness-based approach to data flows and has commonalities with the bottom-up approaches that we see emerging within decentralised networks and their associated technological architectures.

## **_A bottom-up approach: the decentralised model_**

Much of the distributed ledger based technologies that have emerged over the last 10 years is rooted in a specific philosophical ideology, intended to replace or reject statist ideals with more democratic, equal, libertarian or anarchic models of social organisation \[6\]. For a shared social contract to emerge within a community, a shared set of ideals must manifest through the community. Most distributed ledger-based incarnations root ideology within a network “whitepaper” or GitHub repository, often enveloped as community or network “ground-zero”.

Swarm propose the Fair Data Society’s [Fair Data Principles]( https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f) as the bedrock of a shared social contract, intended to inform the ideology and philosophy of all Swarm network participants. Not only do the principles support the existing _Book of Swarm_, they set out (and maintain) various principles to which behaviours and actions of agents in the social layer of the network should adhere. While the principles should not be seen as a defined set of rules, they do look and feel extremely similar to data protection principles we have seen develop from the top-down approaches \[7\]. By examining the principles side by side, we can draw out common themes - highlighting how both sets of principles have common overarching ideals - even though they have developed in very different ways.

## **_Commonalities and consistencies_**

![Fig 2: Illustration of varying approaches to regulating data flows](/uploads/fig2-data-flows.PNG "Fig 2: Illustration of varying approaches to regulating data flows")

In the FIPs, two of the more distinct rules were enacted to protect the consumer, through concepts related to “notice/awareness” and “choice/consent”. The concept of consent-based data processing, which implies a degree of control and ownership over how an individual’s data is processed, has stayed consistent in subsequent data protection regulation. As data protection has become increasingly framed as a rights-based notion (see, e.g., article 7 of the [EU Charter of Fundamental Rights](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:12012P/TXT)), the individual as data subject has continued to be foregrounded.

The more normatively-grounded Fair Data Principles echo this with their three principles of “ownership”, “control” and “consensual access”, alongside individual rights, such as the right of a data subject to request and receive data pertaining to them and to rectify or delete this data (see too, e.g., the OECD “individual participation principle” and the GDPR list of data subject rights). To be in line with this approach, Swarm should - in principle - also foreground the individual’s agency and rights to contribute to the fair data economy.

Several common principles relate to the personal data itself, covering its collection, processing and quality. The FIPs, OECD principles, Convention 108 and the GDPR, _inter alia_, advocate limits on personal data collection and processing, while the Fair Data Principles open with a “zero-data” principle - which specifies that privacy and non-collection of personal data should be the default when a high volume of data is produced.

Similarly, all instruments include various manifestations of purpose limitation, data minimisation, data accuracy and storage limitation principles. Further common principles include security, accountability and various forms of enforcement or redress. In the context of Swarm, principles of redress and enforcement are relatively ill-defined. Permissionless, inclusive networks often defer to community-based dispute mechanisms or arbitration procedures, but it is still unclear whether (or how) these will be integrated into the Swarm ecosystem.

Interestingly, data protection regulation is moving towards a more normative-based framework – at least _prima facie_. The [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) provides that “the processing of personal data should be designed to serve mankind” (recital 4). The [EU Data Governance Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767) proposal includes notions of data sharing in an open and collaborative manner, and provides the basis for the concept of data altruism. “Data altruism” in the proposed Act covers situations where natural or legal persons make data voluntarily available for reuse, without compensation, for “purposes of general interest, such as scientific research purposes or improving public services” (art 2(10)). This could be analogous to parts of the “economic benefit & fair value” and “social good” principles within the Fair Data Principles, and should also be viewed as an assemblage through which the bottom-up approach of Swarm and the top-down approach of bodies such as the European Commission can find common grounds \[8\].

It should also be remembered that a complex technical infrastructure is built around the Fair Data Principles, and while the principles generally flowing from the above illustration (Fig. 2), could be operationalised by decentralised architecture and blockchain technology, there are still open questions as to how the principles can be realised in practice. Further, many open questions regarding governance and interactions with the incumbent legal frameworks have yet to be explored in full by the Swarm ecosystem.

We propose that drawing from the theory and practice of commons-based governance could provide further insights into how some of these questions could be addressed. Swarm’s use of distributed architecture and technological incorporation of participation and governance incentives could be seen as an example of a digital commons, with storage and communication infrastructure governed as a shared resource. The theory and practices of (digital) “commons” presents a rich history to draw from concerning the governance of sustainable decentralised networks.

# **Introduction to the commons**

The commons is a term often used to refer broadly to resources that are shared by a group of people. Historically, commons would be lands that were used by multiple people, or households, over a certain period of time. Commons as a theory for common stewardship of resources was popularised by Elinor Ostrom, with her critique of Garrett Hardin’s article _The Tragedy of the Commons_. Ostrom demonstrated the commons as a form of decentralised management of resources, where resources could be sustainably governed without centralised management from governments, or the assignment of private property rights.

Most notably, Ostrom identified “design principles”, a form of best practices that were largely present in how a commons was governed, in instances where communities had sustainably and peacefully managed shared resources over time.

While Ostrom’s analysis was originally limited to natural resource systems, and “common pool resources”, the analytical lens of the commons has since been applied to “knowledge commons” (e.g., libraries, archives, Wikipedia), and “digital commons” (e.g., scholarly publishing, free software communities, Creative Commons licenses) \[9\].

# **How the commons, Swarm and the Fair Data Principles could interact**

First, decentralised architecture could support the success of digital commons in important ways. Technological affordances from the architecture can enable key features of commons governance, such as granular rules around resource use, transparent and inclusive consensus building processes, mechanisms for monitoring and enforcing compliance, and so on.

Second, the commons can also order thinking with respect to the governance of sustainable decentralised institutions. Commons scholars have argued that Ostrom’s design principles can guide the design of appropriate governance strategies. As Bollier notes, commons discourse is at once “descriptive”, “constitutive”, and “expressive”: it is descriptive because it helps identify models of community governance that would otherwise go unexamined; it is constitutive because using this new language helps build communities based on principles of the commons; it is expressive because the language of the commons is a way for communities to assert a connection with a resource \[10\].

Initiatives like Swarm and the Fair Data Society support decentralised architecture, in part to incorporate greater fairness and participation in the governance, and use, of data. Respectively, “commons”-based institutional frameworks are well suited to aiding this task by providing principles that can guide design.

# **Design principles of the commons**

The design principles for sustainable commons are:

1. **Clearly defined boundaries around the resource and the community**  
   There is a clear understanding of what the resource in question is, and clarity over who can access, use and manage the resource, and who can exclude others from the same.
2. **Congruence between local conditions and the rules for appropriation and provision of the resource**  
   The rules for access, use, etc. of the resource are suited to the nature of the resource, as well as the community. The costs of participating in the collective action institution is proportionate to the benefits derived from it.
3. **Individuals affected by rules can participate in their modification**  
   Individuals affected by rules related to access, use and management are able to participate in the processes that make and modify the rules.
4. **A system for monitoring the resource and the behaviour of individuals**  
   There are mechanisms in place to monitor the state of the resource and compliance with the rules. Monitors are part of the community or are accountable to the community - particularly those most dependent on the resource.
5. **A graduated system of sanctions for instances of non-compliance**  
   There are proportionate and gradual sanctions for non-compliance with rules.
6. **Accessible and low-cost dispute resolution mechanisms**  
   Individuals have access to dispute resolution mechanisms to adjudicate disputes related to boundaries, rules or infractions. The mechanisms may be informal, but are simple and accessible.
7. **Nominal recognition by external authorities**  
   External authorities recognise the right of the community to organise itself.
8. **Nested enterprises**  
   Governance is organised at multiple layers and decentralised to the extent possible.

Decentralised networks like Swarm already incorporate these principles to some extent. For instance, digital commons, unlike natural resource systems, are constructed - necessarily having clear boundaries. There could also be clear protocols and rules around how members of the community may access the resource (Principle 1). The network protocols build in appropriate incentives, which are technologically enforced (Principles 2, 4 and 5). The network is open source, inclusive and permissionless, even including the theoretical possibility of being forked if ideologies clash (Principles 3 and 6).

At the same time, the design principles can highlight elements of governance that can promote continued participation from the Swarm community. Some provocations to consider:

* Is there a clear boundary, or protocols, for inclusion within the community of users, developers and maintainers?
* Is there a clear protocol for community participation in rule (code) formation?
* Are there proportionate incentives for participation in the maintenance and governance of the network?
* How can maintainers and developers remain aligned and accountable to the community?
* Are there off-chain behaviours that could negatively impact the network? Can there be agreed upon rules for those behaviours?
* What mechanisms could be employed to prevent infractions? Could additional legal technical, or organisational measures support the agreed rules or protocols?

# **Conclusion**

Swarm's governance requires engagement with multiple normative and legal frameworks. For instance, to the extent that it processes personal data, it must align with data protection principles and regulation. Legislative proposals such as the Data Governance Act additionally present both a challenge and an opportunity. Infrastructure like Swarm may align well with the data-related innovation conceived by the EU’s recent proposals, but this could in turn bring further regulatory scrutiny. A marriage of top-down data protection frameworks, such as those emanating from US, EU and international institutions, and Swarm and the Fair Data Principles, which flow from a community-based, bottom-up approach, could guide data governance related to Swarm. In addition to engagement with legal frameworks, distributed networks raise governance issues, not all of which may be addressed at the level of technical architecture \[11\]. The sustainability of commons ventures seems to benefit also from the successful instantiation of certain design principles.

Our exploration of the commons design principles illustrates how the sustainable governance of distributed networks may raise complex questions. The Fair Data Principles and the Book of Swarm represent ongoing consensus within the community with respect to some of these questions, but there are further governance elements of which the community must remain cognisant. For instance, the role of maintainers and developers, the presence of accessible dispute resolution, and rules of participation surrounding both meta-data and non-personal data can be key elements of sustained engagement from a community of decentralised participants. There may be opportunities for the Swarm community to be more explicit about developing consensus on these accounts. As such, in designing and governing bottom-up, decentralised infrastructures, Swarm need not start from scratch, and has many existing traditions to draw from.

***

A note from the authors

Robin and Mistale are researchers at [Trilateral Research](https://www.trilateralresearch.com/), and Aditya is a doctoral researcher at Edinburgh University. We would like to thank Swarm for funding this research.

***

**References and footnotes**

\[1\] : Swarm: Storage and communication infrastructure for a self-sovereign digital society, available at: [https://www.ethswarm.org/swarm-whitepaper.pdf](https://www.ethswarm.org/swarm-whitepaper.pdf "https://www.ethswarm.org/swarm-whitepaper.pdf").

\[2\]: Ethereum : webpage, available at: [https://ethereum.org/en/](https://ethereum.org/en/ "https://ethereum.org/en/").

\[3\]: The current deployment of Swarm uses xDAI. The current roadmap is to deploy Swarm on the Ethereum network once low cost micro-transactions become available with ETH 2.0.

\[4\]: Fair Data Principles, v.0.0.1, available at: [https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f](https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f "https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f").

\[5\]: Tron, V. (2020). The Book of Swarm: storage and communication infrastructure for self-sovereign digital society back-end stack for the decentralised web, available at: [https://www.ethswarm.org/The-Book-of-Swarm.pdf](https://www.ethswarm.org/The-Book-of-Swarm.pdf "https://www.ethswarm.org/The-Book-of-Swarm.pdf").

\[6\]: Swarm: Storage and communication infrastructure for a self-sovereign digital society, available at: [https://www.ethswarm.org/swarm-whitepaper.pdf](https://www.ethswarm.org/swarm-whitepaper.pdf "https://www.ethswarm.org/swarm-whitepaper.pdf").

\[7\]: Benisi, N. Z., Aminian, M., & Javadi, B. (2020). Blockchain-based decentralized storage networks: A survey. Journal of Network and Computer Applications, 162, 102656.

\[8\]: Sia, webpage, available at: [https://sia.tech/](https://sia.tech/ "https://sia.tech/").

\[9\]: Filecoin, webpage, available at: [https://filecoin.io/](https://filecoin.io/ "https://filecoin.io/").

\[10\]: Storj, webpage, available at: [https://www.storj.io/](https://www.storj.io/ "https://www.storj.io/").

\[11\]: Androutsellis-Theotokis, S. & Spinellis, D. (2004). A survey of peer-to-peer content distribution technologies. _ACM computing surveys (CSUR)_, _36_(4), 335-371.

\[12\]: IPFS, Github page, available at: [https://github.com/ipfs/ipfs](https://github.com/ipfs/ipfs "https://github.com/ipfs/ipfs").

\[13\]: Tron, V. (2020). the book of Swarm: storage and communication infrastructure for self-sovereign digital society back-end stack for the decentralised web, p.17.

\[14\]: Tron, V. (2020). the book of Swarm: storage and communication infrastructure for self-sovereign digital society back-end stack for the decentralised web, p.18.

\[15\]: See the FIPs principles in the US Department of Justice Library, US Department of Health, Education and Welfare: Secretary’s Advisory Committee on Automated Personal Data Systems, ‘Records, Computers, and the Rights of Citizens’ (1973) xx-xxi.

\[16\]: Organisation for Economic Co-operation and Development. _OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data_. September 23, 1980; available at: [http://www.oecd.org/document/18/0,2340,en_2649_3425__1815186_1_1_1_1,00.html_](http://www.oecd.org/document/18/0,2340,en_2649_34255_1815186_1_1_1_1,00.html "http://www.oecd.org/document/18/0,2340,en_2649_34255_1815186_1_1_1_1,00.html")

\[17\]: Council of Europe, Convention for the Protection of Individuals with Regard to the Automatic Processing of Individual Data, 28 January 1981, ETS 108.

\[18\]: Proposal for a Regulation of the European Parliament and of the Council on European data governance (Data Governance Act) COM/2020/767, available at: [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767 "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767").

\[19\]: For further exploration of this topics, please refer to:  
Karlstrøm, H. (2014). Do libertarians dream of electric coins? The material embeddedness of Bitcoin. _Distinktion: Scandinavian Journal of Social Theory_, _15_(1), 23-36;  
Swan, M., & De Filippi, P. (2017). Toward a philosophy of blockchain: A symposium: Introduction. _Metaphilosophy_, 48(5), 603-619;  
Groos, J. (2020). Crypto Politics: Notes on Sociotechnical Imaginaries of Governance in Blockchain Based Technologies. In _Data Loam_ (pp. 148-170). De Gruyter.

\[20\]: Fair Data Principles, available at: [https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f](https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f "https://medium.com/fair-data-society/fair-data-principles-56e6ee5e157f").

\[21\]: The Fair Data Society Principles themselves explicitly "draw on the previous works of DataEthics, MyData, World Fair Trade Organisation, Status, Ethical Design Manifesto and various philosophical works", see Acknowledgments: [https://principles.fairdatasociety.org/](https://principles.fairdatasociety.org/ "https://principles.fairdatasociety.org/").

\[22\]: Fair Data Principles, principles 2, 3 and 4.

\[23\]: GDPR, recital 4.

\[24\]: Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on European data governance (Data Governance Act proposal) COM/2020/767, available at: [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767 "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52020PC0767").

\[25\]: Data Governance Act proposal, Art 2(10).

\[26\]: DeLanda, M. (2019). A new philosophy of society: Assemblage theory and social complexity. Bloomsbury Publishing.

\[27\]: Garrett Hardin, ‘The Tragedy of the Commons’, 168 Science 1243 (1968).

\[28\]: See for instance : Elinor Ostrom and Charlotte Hess (Eds.) _Understanding Knowledge as Commons_ (2004); Brett M. Frischmann, _et al_ (Eds.) _Governing Knowledge Commons_ (2014).

\[29\]: David Bollier, _Free Fair and Alive_ 16 (2019).

\[30\]: Walch, A. Deconstructing “Decentralization”: Exploring the Core Claim of Crypto Systems. In _Cryptoassets_ (pp. 39-68). Oxford University Press.

***

# **Join the FDS Community**

* Fair Data Society [**website**](https://fairdatasociety.org/).
* Read the [**Fair Data Society principles**](https://principles.fairdatasociety.org/).
* Fairdrive [**website**](https://fairdrive.fairdatasociety.org/).
* Follow us on [**Twitter**](https://twitter.com/fairdatasociety)**.**
* Join our discussions at [**Discord**](https://discord.gg/KrVTmahcUA)**.**
* Please feel free to reach out via **email**: [**info@fairdatasociety.org**](mailto:info@fairdatasociety.org)